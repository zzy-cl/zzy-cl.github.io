---
title: 静态资源CDN推荐
date: 2023-03-31 12:01:32
ai: 暂无预设简介，请点击下方AI实时简介按钮。
description: 汇总了一些国内常用的CDN静态资源库
background: url(https://imagecloud.zhaozeyu.top/2023/03/31/64265d28ac43b.webp)
cover: https://imagecloud.zhaozeyu.top/2023/03/31/64265d28ac43b.webp
swiper_index: 8
categories:
  - 资源推荐
tags:
  - CDN
---

### Staticfile CDN（推荐）

官网：[Staticfile CDN](https://staticfile.org/)

CDN加速由七牛云提供，技术社区掘金支持。

> 我们提供这样一个仓库，让它尽可能全面收录优秀的开源库，并免费为之提供 CDN 加速服务，使之有更好的访问速度和稳定的环境。同时，我们也提供开源库源接入的入口，让所有人都可以提交开源库，包括 JS、CSS、image 和 swf 等静态文件。
>
> Staticfile CDN 所收录的开源项目主要同步于 [cdnjs](https://github.com/cdnjs/cdnjs) 开源项目仓库。

### 字节跳动资源库（推荐）

官网：[字节跳动静态资源公共库](http://cdn.bytedance.com/)

### UNPKG（不推荐）

官网：[UNPKG](https://unpkg.com/)

UNPKG是一个快速的全球内容交付网络，适用于[NPM](https://www.npmjs.com/)上的所有内容。使用它可以使用 URL 快速轻松地从任何包加载任何文件，例如：

```
unpkg.com/:package@:version/:file
```

### elemecdn（推荐）

用来替代`UNPKG`，相当于它的国内镜像，速度很快，而且可以加载npm上的所有文件。
经过测试，在`Edge`和`Chrome`上加载同一版本的`vue.global.js`都是elemecdn快。

### bootcdn（不推荐）

官网：[BootCDN ](https://www.bootcdn.cn/)

> BootCDN 是 [极兔云](https://www.jitucdn.com/) 联合 [Bootstrap 中文网](https://v5.bootcss.com/) 共同支持并维护的前端开源项目免费 CDN 服务，致力于为 Bootstrap、jQuery、React、Vue.js 一样优秀的前端开源项目提供稳定、快速的免费 CDN 加速服务。BootCDN 所收录的开源项目主要同步于 [cdnjs](https://github.com/cdnjs/cdnjs) 开源项目仓库。

### jsdelivr

官网：[jsDelivr](https://www.jsdelivr.com/)

速度感人，国内现如今已经无法使用。
