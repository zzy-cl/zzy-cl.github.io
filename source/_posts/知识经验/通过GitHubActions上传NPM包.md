---
title: 通过GitHubActions上传NPM包
ai: 这篇文章介绍了如何使用 GitHub Actions 在 GitHub Packages 和 npm registries 中自动发布或安装包。文章首先介绍了 GitHub Packages 和 GitHub Actions 的基本概念和权限设置，然后分别说明了如何使用 action 发布或安装包，以及如何升级使用个人访问令牌的工作流。文章还提供了一些示例代码和链接，帮助读者了解和配置工作流。
date: 2023-04-20 12:28:11
description: 本文详细介绍了如何通过 GitHub Actions 来自动上传 npm 包
background: url(https://imagecloud.zhaozeyu.top/2023/04/20/6440c236401d2.webp)
cover: https://imagecloud.zhaozeyu.top/2023/04/20/6440c236401d2.webp
swiper_index: 10
categories:
  - 知识经验
tags:
  - GitHubActions
  - CDN
---

## 简介

GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

GitHub Actions 不仅仅是 DevOps，还允许您在存储库中发生其他事件时运行工作流程。 例如，您可以运行工作流程，以便在有人在您的存储库中创建新问题时自动添加相应的标签。

GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

这篇文章主要讲解的是如何使用 GitHub Actions 将仓库中的文件推送到 npmjs 中。

首先，我们先要了解 CI/CD：

> Continuous integration：是指开发者经常把代码变化合并到一个中心仓库，然后运行自动化的构建和测试。这样可以尽早地发现和解决集成问题，提高代码的质量。
> Continuous delivery：是在 continuous integration 的基础上，把代码变化自动地部署到测试或者生产环境。这样可以实现快速和安全地交付应用程序，而不需要人工干预。Continuous
> delivery 的目标是让软件随时可以发布，但是发布的时间由开发者或者业务方决定。

## 操作

### 注册 NPM 账号

首先，你应该有一个自己的 npm 网站账号，如何没有，点击这里[npm | Sign Up](https://www.npmjs.com/signup)
进行注册。![image-20230420113124927](https://imagecloud.zhaozeyu.top/2023/04/20/6440b21462820.png)

### 邮箱验证

完成邮箱验证，注册完成后进入账号管理界面:头像->Account，拉倒最上方，你会看到`You have not verified your email address`
字样的提示，点击以后按提示步骤验证你的邮箱。

### 本地NPM用户设置

在本地打开你想要上传的项目`[FolderName]`，如何在 github 上就把他 clone 到本地进入文件内打开终端，通过以下命令添加本地 npm
用户设置。

```bash
# 仅第一次使用需要添加用户，之后会提示你输入你的npm账号密码以及注册邮箱
npm adduser
# 非第一次使用直接登录即可，之后会提示你输入你的npm账号密码以及注册邮箱
npm login
```

### NPM初始化

运行 npm 初始化指令，按照指示进行配置，注意需要事先确认你的包名没有和别人已发布的包重复，可以在 npm 官网搜索相应包名，搜不到就说明还没被占用。

```bash
npm init
```

![image-20230420114338553](https://imagecloud.zhaozeyu.top/2023/04/20/6440b4eae3537.png)

### 发布到NPM

然后输入发布指令，我们就可以把包发布到 npm 上了。

```bash
npm publish
```

### CDN访问

此时当我们在浏览器访问以下 url 时，将会得到我们想要的静态CDN文件。

```
# 国外源，中国访问到的是香港节点
https://unpkg.com/:package@:version/:file
# 国内镜像源，在国内访问速度还是很快的，推荐使用这种
https://npm.elemecdn.com/:package@:version/:file
```

### 配置 GitHub Actions

如果每次都要在本地进行`npm publish`的话，npm 的提交是整个包一起上传的，不存在增量更新，耗时不说，而且还往往需要架梯子才能正常上传。所以我们可以把它交给
GitHub Actions 来完成。

#### 配置 npm_token

在[npm 官网](https://www.npmjs.com/)->头像->Access Tokens->Generate New Token,勾选 Automation 选项，`Token`
只会显示这一次，之后如果忘记了就只能重新生成重新配置了。

![image-20230420120053467](https://imagecloud.zhaozeyu.top/2023/04/20/6440b8f5eb883.png)

![image-20230420120243157](https://imagecloud.zhaozeyu.top/2023/04/20/6440b96365ede.png)

### 添加 NPM_TOKEN环境变量

进入存放我们文件的GItHub仓库，没有的话就创建一个。按如下步骤添加 NPM_TOKEN，把获取的 NPM 的 Access token 输入进去。

![image-20230420120831456](https://imagecloud.zhaozeyu.top/2023/04/20/6440babfaf92a.png)

### 添加配置文件

在本地的`[FolderName]`文件夹下新建`[FolderName]/.github/workflows/publish_config.yml`,写入以下内容：

```yaml
name: blogAssets-publish
# 选定分支，当 main 分支获得推送时运行工作流
on:
  push:
    branches:
      - main
jobs:
  publish-npm:
    runs-on: ubuntu-latest
    steps:
      # https://github.com/marketplace/actions/checkout
      - uses: actions/checkout@v3
      # https://github.com/marketplace/actions/setup-node-js-environment
      - uses: actions/setup-node@v3
        with:
          node-version: "18.x"
          registry-url: "https://registry.npmjs.org"
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### 推送

在本地的`[FolderName]`文件夹下打开终端，运行以下指令，上传新增内容至 github，即可触发部署。

```bash
# 将更改提交
git add .
git commit -m "npm publish"
# 更新package版本号
npm version patch
# 推送至github触发action
git push -u origin main
```

{% note warning nodern %}

此处的四行指令顺序严格。
每次更新 npm 图床都需要先修改`[FolderName]\package.json`里的`version`,也就是版本号。
而`npm version patch`即为更新 package.json 里的版本号的指令，效果是末尾版本号+1，例如`0.0.1=>0.0.2`、`1.1.3=>1.1.4`
。免去了打开`package.json`再修改版本号的麻烦。（大版本更新还是需要手动改的）
更新 npm 图床务必要记得更新`package.json`里的版本号！

{% endnote %}
