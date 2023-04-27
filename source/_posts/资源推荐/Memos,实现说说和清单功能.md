---
title: Memos,实现说说和清单功能
date: 2023-04-09 20:51:10
ai: 暂无预设简介，请点击下方AI实时简介按钮。
description: Memos，一个轻量级的自托管备忘录中心。开源和永久免费。
background: url(https://imagecloud.zhaozeyu.top/2023/04/09/6432b644a8648.webp)
cover: https://imagecloud.zhaozeyu.top/2023/04/09/6432b644a8648.webp
swiper_index: 9
categories:
  - 资源推荐
tags:
  - Hexo
  - Memos
---

### 简介

> Memos，一个轻量级的自托管备忘录中心。开源和永久免费。
>
> 可以说是支持 Docker 自部署的 [flomo ](https://flomoapp.com/) ，而且有 API 调取数据和发 Memos 。

![image-20230409164813506](https://imagecloud.zhaozeyu.top/2023/04/09/64327bd619b30.png)

官网：[memos](https://usememos.com/)

### 前言

一般来讲，Memos通过Docker来部署，所以想要部署使用Memos的话，**最好有服务器**。

如果你没有服务器的话，可以尝试使用[**小N同学**](https://www.imcharon.com/)和杜老师维护的公益项目：[memos纯公益代部署服务](https://www.imcharon.com/1467/)。

**效果预览：**

- 说说功能页面：[日常动态](https://www.zhaozeyu.top/social/chatter/)

- 清单功能页面：[清单](https://www.zhaozeyu.top/personal/list/)

本教程参考了[Leonus](https://blog.leonus.cn/)和[木木木木木](https://immmmm.com/)关于Memos的文章，感兴趣的同学可以去看一看。

### 部署

#### 第一步：

新建一个文件夹memos，作为项目的根文件夹。

#### 第二步

在根文件夹下新建文件`docker-compose.yml`。

推荐使用`docker-compose.yml`方式进行部署，方便制定数据储存位置及更新版本，其中使用 `${PWD}` 指定路径为当前文件夹。

```yaml
version: "3.0"
services:
  memos:
    image: neosmemo/memos:latest
    container_name: memos
    volumes:
      - ${PWD}/.memos/:/var/opt/memos
    ports:
      - 5230:5230
```

#### 第三步

以宝塔面板为例：

1. 构建并启动容器：

```bash
docker-compose up -d
```

2. 由于Memos是一个新的项目，还处于快速迭代的时期，所以我们可能会经常更新版本：

```bash
docker-compose pull && docker-compose up -d --force-recreate
```

这个命令的意思是：**拉取服务依赖的镜像并强制重新创建容器**。

我们的数据都会存放在`.memos`文件夹中，所以建议定时备份目录下的 `.memos` 文件夹。

#### 第四步

添加反向代理：

操作如下：网站--->添加站点（之后的操作建立在自己创建的站点上面）--->设置--->反向代理--->添加反向代理

其中**目标url**填写的是`http://{自己的服务器ip}:5230`

![image-20230409180750892](https://imagecloud.zhaozeyu.top/2023/04/09/64328e77ef26a.png)
