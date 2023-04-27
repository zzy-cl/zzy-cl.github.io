---
title: NestJs教程一（准备阶段）
date: 2023-03-24 23:59:14
ai: 暂无预设简介，请点击下方AI实时简介按钮。
description: NestJs教程一，主要讲解学习NestJs的前置准备。
cover: https://imagecloud.zhaozeyu.top/2023/03/27/642171abe0ca3.webp
background: url(https://imagecloud.zhaozeyu.top/2023/03/27/642171abe0ca3.webp)
swiper_index: 6
categories:
  - 后端学习
tags:
  - NestJs
  - 后端
---

### NestJs是什么

以下是ChatGPT给出的解答：

> NestJS 是一个基于 TypeScript 的开源 Node.js 框架，它使用了现代的架构模式和设计原则来帮助开发人员构建高效、可扩展的服务器端应用程序。
>
> NestJS 提供了一组强大的工具和库，包括依赖注入、模块化、路由、中间件、管道、过滤器、异常处理、Websockets、GraphQL 等，可以帮助开发人员轻松地构建和维护复杂的应用程序。
>
> NestJS 的架构和语法类似于 Angular，这使得 Angular 开发人员能够更快速地上手 NestJS。此外，NestJS 还具有良好的文档和社区支持，使得开发人员能够轻松地学习和使用它来构建高质量的应用程序。

### 先决条件

NodeJs（版本>=14）

`node -v`来查看自己电脑的NodeJs版本。

`npm -v`来查看自己电脑npm的版本。

### 起步

1.安装NestJs的命令行界面工具`Nest CLI`

```bash
npm i -g @nestjs/cli
```

2.创建项目

```bash
nest new project-name
```

> 要创建启用 TypeScript `strict`模式的新项目，请将 `--strict` 标志传递给 `nest new` 命令

当你在控制台看到`Thanks for installing Nest 🙏`，说明大功告成。

3.项目生成后，目录中有一个`src`文件夹，其中主要文件如下：

   ```
   src
    ├── app.controller.spec.ts
    ├── app.controller.ts
    ├── app.module.ts
    ├── app.service.ts
    └── main.ts
   ```

以下是这些核心文件的简要概述：

| 文件名                    | 解释                                         |
|:-----------------------|--------------------------------------------|
| app.controller.ts      | 带有单个路由的基本控制器示例。                            |
| app.controller.spec.ts | 对于基本控制器的单元测试样例。                            |
| app.module.ts          | 应用程序的根模块。                                  |
| app.service.ts         | 带有单个方法的基本服务。                               |
| main.ts                | 应用程序入口文件。它使用 `NestFactory` 用来创建 Nest 应用实例。 |

4.`main.ts` 包含一个异步函数，它负责**引导**我们的应用程序：

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

`NestFactory` 核心类：用于创建一个 Nest 应用实例，`NestFactory` 暴露了一些静态方法用于创建应用实例。 `create()` 方法返回一个实现 `INestApplication` 接口的对象。

> 默认情况下，如果在创建应用程序时发生了任何错误，你的应用程序会退出并返回错误代码 `1`。如果你想让它抛出错误，请禁用 `abortOnError` 选项，例如：
>
> ```typescript
> const app = await NestFactory.create(AppModule, { abortOnError: false });
> ```

### 平台

Nest 旨在成为一个与平台无关的框架。（啥意思呢？就是说NestJs 可以与任何 node.js 的 HTTP 框架一起工作。）

NestJs内置两个NodeJs平台：[express](https://expressjs.com/) 和 [fastify](https://www.fastify.io/)。

| 包名               | 注释                                                                                                                                                                   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| platform-express | [Express](https://expressjs.com/) 是一个众所周知的 node.js 简约 Web 框架。 这是一个经过实战考验，适用于生产的库，拥有大量社区资源。 默认情况下使用 `@nestjs/platform-express` 包。 许多用户都可以使用 Express ，并且无需采取任何操作即可启用它。 |
| platform-fastify | [Fastify](https://www.fastify.io/) 是一个高性能，低开销的框架，专注于提供最高的效率和速度。 在[这里](https://docs.nestjs.cn/8/techniques?id=性能（fastify）)阅读如何使用它。                                    |

无论使用哪种平台，它都会暴露自己的 API。 它们分别是 `NestExpressApplication` 和 `NestFastifyApplication`。

将类型传递给 NestFactory.create() 函数时，如下例所示，app 对象将具有专用于该特定平台的函数。 但是，请注意，除非您确实要访问底层平台 API，否则无需指定类型。

```typescript
const app = await NestFactory.create<NestExpressApplication>(AppModule);
```

### 运行应用程序

命令：

```bash
npm run start
```

当然，我们更常用的是：

```bash
npm run start:dev
```

因为后者相当于`watch`模式，可以一直监听文件的更改，自动重新编译并重新加载服务器。

浏览器访问`http://localhost:3000/`，你应该看到 `Hello world!` 信息。
