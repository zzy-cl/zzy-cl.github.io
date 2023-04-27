---
title: Hexo博客自动化部署方案
ai: 暂无预设简介，请点击下方AI实时简介按钮。
date: 2023-04-21 00:15:24
description: 通过 GitHub Actions 将博客网站一键部署到云服务器、githubPage上，并且执行我们需要的脚本命令。
background: url(https://imagecloud.zhaozeyu.top/2023/04/20/6440c232b9412.webp)
cover: https://imagecloud.zhaozeyu.top/2023/04/20/6440c232b9412.webp
swiper_index: 11
categories:
  - 知识经验
tags:
  - GitHubActions
  - Hexo
  - 部署
---

Hexo是一个流行的静态博客生成器，它可以让你用Markdown语言写博客，并且轻松地将其发布到GitHub
Pages或其他服务器上。但是，每次发布博客时，你都需要在本地执行一些命令，比如`hexo g`和`hexo d`
，这样可能会比较麻烦和耗时。有没有一种方法可以让你只需要写好Markdown文件，然后推送到GitHub仓库，就可以自动完成博客的生成和部署呢？答案是有的，那就是使用GitHub
Actions。

GitHub
Actions是GitHub提供的一种自动化工具，它可以让你在GitHub仓库中定义一些工作流程（workflow），并且在某些触发条件下执行这些工作流程。比如，你可以在每次推送代码到仓库时，自动运行一些测试或者构建任务。对于Hexo博客来说，我们可以利用GitHub
Actions来实现自动部署的功能。

本文将介绍如何使用GitHub Actions来自动部署Hexo博客到服务器和GitHub
Pages。本文假设你已经有一个Hexo博客项目，并且已经将其上传到GitHub仓库中。如果你还没有Hexo博客项目，可以参考Hexo官方文档来创建一个。

## GitHub Actions 使用教程

### 获取 github tokens

因为 GitHub Actions 持续部署的过程中涉及到了对 GitHub 的仓库操作，我们需要获取相应的权限，需要先获取 GitHub Tokens。

访问 **Github->头像（右上角）->Settings->Developer Settings->Personal access tokens->Tokens(classic)->generate new token**
,创建的 Token 名称随意，**但必须勾选 repo 项 和 workflows 项**。

![image-20230421214620136](https://imagecloud.zhaozeyu.top/2023/04/21/644293b41ddd3.png)

![image-20230421214937386](https://imagecloud.zhaozeyu.top/2023/04/21/644294723d01f.png)

{% note warning %}

生成的Token只显示一次，务必记得复制存取起来

{% endnote %}

### 创建 GitHub 仓库

我们需要创建一个用来存放 `Hexo` 博客源码的私有仓库`[BlogCode]`。

![image-20230421215607525](https://imagecloud.zhaozeyu.top/2023/04/21/644295f864a2a.png)

如何你想要在仓库上传代码后获取一个 GitHub Page，你需要把仓库的名字命名成`[你的GitHub用户名].github.io`格式，如下示例：

![image-20230421215811417](https://imagecloud.zhaozeyu.top/2023/04/21/644296743b8d5.png)

将本地的博客代码上传到这个 GitHub 仓库。

## 配置 GitHub Actions

### 代码配置

在`[Blogroot]`新建`.github`文件夹,注意开头是有个`.`的。然后在`.github` 内新建 `workflows` 文件夹，再在 `workflows`
文件夹内新建 `config_deploy.yml`,在`[Blogroot]/.github/workflows/config_deploy.yml` 里面输入以下内容：

```yaml
name: 自动部署

# 当有新的改动推送到 master 分支时，执行 Action
on:
  push:
    branches:
      - main
  release:
    types:
      - published

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 校验分支
        uses: actions/checkout@v3
        with:
          # 要校验的分支
          ref: main
          # 要获取的提交数。0表示所有分支和标记的所有历史记录。默认值：1
          fetch-depth: 0

      - name: 同步本地文件时间戳
        run: |
          git ls-files -z | while read -d '' path; do touch -d $(git log -1 --format="@%ct" "$path") "$path"; done

      - name: 安装node环境
        uses: actions/setup-node@v3
        with:
          node-version: "18.x"
          registry-url: "https://registry.npmjs.org"

      - name: 安装Hexo环境
        run: |
          export TZ='Asia/Shanghai'
          npm install hexo-cli -g

      - name: 缓存Hexo文件
        id: cache-npm
        uses: actions/checkout@v3
        env:
          cache-name: cache-node-modules
        with:
          path: node_modules
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys:
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      - name: 安装依赖
        if: steps.cache-npm.outputs.cache-hit != 'true'
        run: |
          npm install --save

      - name: 生成静态文件
        run: |
          hexo clean
          hexo generate
          hexo algolia

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GH_TOKEN }}
          publish_dir: ./public

      - name: 部署到服务器
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          ARGS: "-rltgoDzvO --delete"
          SOURCE: "./public/*"
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_PORT: ${{ secrets.REMOTE_PORT }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          TARGET: ${{ secrets.REMOTE_TARGET }}
```

### 配置环境变量

后需要自己到仓库的 Settings->Secrets->actions 下添加环境变量，变量名参考脚本中出现的，依次添加。

![image-20230421221009331](https://imagecloud.zhaozeyu.top/2023/04/21/64429942409ca.png)

![](https://imagecloud.zhaozeyu.top/2023/04/21/644299517cfa8.png)

### 重新上传代码

在本地仓库的终端中依次输入以下命令：

```bash
git add .
git commit -m "github blogcode update"
git push -i origin main
```

### 查看部署情况

打开我们新建的 GItHub 仓库，在导航栏中找到 Actions，选择 自动部署，选择最新的工作流，如下顺序：

![image-20230421221822997](https://imagecloud.zhaozeyu.top/2023/04/21/64429b2fde72e.png)

当所有的步骤都显示`√`时，说明你的配置和操作都正确：

![image-20230421222233484](https://imagecloud.zhaozeyu.top/2023/04/21/64429c2a6be0c.png)

至此，你已经成功完成了 Hexo 博客的自动化部署设置，恭喜你，你现在可以享受自动部署的快感了！
