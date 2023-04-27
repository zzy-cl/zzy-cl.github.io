---
title: NestJs教程二（控制器）
date: 2023-03-28 23:01:35
ai: 暂无预设简介，请点击下方AI实时简介按钮。
description: NestJs教程二，讲解NestJs中的控制器部分。
cover: https://imagecloud.zhaozeyu.top/2023/03/27/642171ac15f08.webp
background: url(https://imagecloud.zhaozeyu.top/2023/03/27/642171ac15f08.webp)
swiper_index: 6
categories:
  - 后端学习
tags:
  - NestJs
  - 后端
---
## NestJs教程二（控制器）

### 控制器是什么

> 在NestJS中，控制器是一个普通的类，通过使用装饰器来标记它的行为。控制器是处理HTTP请求和响应的中心，它们负责接收请求并将其路由到适当的方法来处理。每个控制器都是通过路由处理器（router handler）来映射到特定的HTTP端点。

### 创建

命令：

```bash
nest g controller 文件名
```

我们以`nest g co cats`为例：

在`src`目录下会生成一个`cats`目录，里面会有`cats.controller.ts`和`cats.controller.spec.ts`两个文件，第一个就是控制器文件，也是我们需要的文件，第二个为对应的测试文件，我们先不管它。

`cats.controller.ts`中的代码如下：

```typescript
import { Controller } from '@nestjs/common';

@Controller('cats')
export class CatsController {}
```

其中`@Controller()`装饰器用来定义一个基本的控制器，括号中可选一个参数为路径前缀，入例子中传入`cats`，那么接下来这个文件中的路由都会以`localhost:3000/cats`为前缀，这样就最大程度减少了重复代码，还便于路由的统一管理。

### Http方法装饰器

Nest 为所有标准的 HTTP 方法提供了相应的装饰器：`@Get()`、`@Post()`、`@Put()`、`@Delete()`、`@Patch()`、`@Options()`、以及 `@Head()`。此外，`@All()` 则用于定义一个用于处理所有 HTTP 请求方法的处理程序。

其中括号中也可以传入路由来和基础路由进行拼接。



### 路由

我们创建一个`Get`http请求路由：

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    fun1() {
        return '这是一个Get请求函数'
    }
}
```

其中函数`fun1`命名无任何含义，并且与请求类型无关。

当我们请求`http://localhost:3000/cats`时，会得到`这是一个Get请求函数`回应。

如果我们给`@Get()`装饰器传入一个字符串，如下：

```typescript
@Get('profile')
```

那次是的请求为`http://localhost:3000/cats/profile`。

NestJs 使用**两种**不同的操作响应选项的概念：

| 类型         | 方法简介                                                     |
| ------------ | :----------------------------------------------------------- |
| 标准（推荐） | 使用这个内置方法，当请求处理程序返回一个 `JavaScript` 对象或数组时，它将自动序列化为 `JSON`。但是，当它返回一个 `JavaScript` 基本类型（例如`string、number、boolean`）时， Nest 将只发送值，而不尝试序列化它。这使响应处理变得简单：只需要返回值，其余的由 Nest 负责。 |
| 类库特有的   | 我们可以在函数签名处通过 `@Res()` 注入类库特定的响应对象（例如， `Express`）。使用此方法，你就能使用由该响应对象暴露的原生响应处理函数。例如，使用 `Express`，您可以使用 `response.status(200).send()` 构建响应 |

### Request和Response

如果处理程序需要访问客户端的**请求**细节的时候，我们可以在处理函数的签名中使用 `@Req()` 和`@Response()`装饰器。

> 为了在 `express` 中使用 `Typescript` （如 `request: Request` 上面的参数示例所示），请安装 `@types/express` 。
>
> ```bash
> npm install @types/express
> ```
>
>

```typescript
import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    fun1(@Req() req: Request) {
        return {
            code: 0,
            message: '请求成功',
            result: req.query
        }

    }
}
```

我们使用Apifox对`http://localhost:3000/cats`发送请求：

![image-20230328215127977](https://imagecloud.zhaozeyu.top/2023/03/28/6422f0e7227ea.png)

会得到一下结果：

![image-20230328215227893](https://imagecloud.zhaozeyu.top/2023/03/28/6422f11bd5911.png)

> `Request` 对象代表 `HTTP` 请求，并具有查询字符串，请求参数参数，HTTP 标头（HTTP header） 和 正文（HTTP body）的属性（在[这里](https://expressjs.com/en/api.html#req)阅读更多）。在多数情况下，不必手动获取它们。 我们可以使用专用的装饰器，比如开箱即用的 `@Body()` 或 `@Query()` 。 下面是 Nest 提供的装饰器及其代表的底层平台特定对象的对照列表。

| VALUE                     | KEY                               |
| :------------------------ | --------------------------------- |
| `@Request()，@Req()`      | `req`                             |
| `@Response()，@Res()*`    | `res`                             |
| `@Next()`                 | `next`                            |
| `@Session()`              | `req.session`                     |
| `@Param(key?: string)`    | `req.params`/`req.params[key]`    |
| `@Body(key?: string)`     | `req.body`/`req.body[key]`        |
| `@Query(key?: string)`    | `req.query`/`req.query[key]`      |
| `@Headers(name?: string)` | `req.headers`/`req.headers[name]` |
| `@Ip()`                   | `req.ip`                          |
| `@HostParam()`            | `req.hosts`                       |

为了与底层 HTTP 平台（例如，`Express` 和 `Fastify`）之间的类型兼容， Nest 提供了 `@Res()`和 `@Response()` 装饰器。`@Res()` 只是 `@Response()` 的别名。两者都直接暴露了底层平台的 `response` 对象接口。在使用它们时，您还应该导入底层库的类型声明（如：`@types/express`）以充分利用它们。需要注意的是，在请求处理函数中注入 `@Res()`或 `@Response()` 时，会将 Nest 置于该处理函数的**特定于库**（Library-specific mode）的模式下，并负责管理响应。**这样做时，必须通过调用 `response` 对象（例如，`res.json(…)` 或 `res.send(…)`）发出某种响应，否则 HTTP 服务器将挂起。**

### 路由通配符

路由同样支持模式匹配。例如，星号被用作通配符，将匹配任何字符组合。

```typescript
@Get('ab*cd')
fun1() {
    return {
        code: 0,
        message: '路由模式匹配'
    }
}
```

路由路径 `'ab*cd'` 将匹配 `abcd` 、`ab_cd` 、`abecd` 等。字符 `?` 、`+` 、 `*` 以及 `()` 是它们的正则表达式对应项的子集。连字符（`-`） 和点（`.`）按字符串路径逐字解析。

### 状态码

如上所述，默认情况下，响应的**状态码**总是默认为 **200**，除了 POST 请求（默认响应状态码为 **201**），我们可以通过在处理函数外添加 `@HttpCode（...）` 装饰器来轻松更改此行为。

> `HttpCode` 需要从 `@nestjs/common` 包导入。

```typescript
@Post()
@HttpCode(203)
fun2() {
    return '状态码'
}
```

可以看到状态码已经变成了`203`

![image-20230328221314180](https://imagecloud.zhaozeyu.top/2023/03/28/6422f5fa3185c.png)

### Headers

要指定自定义响应头，可以使用 `@header()` 装饰器或类库特有的响应对象，（并直接调用 `res.header()`）。

> `Header` 需要从 `@nestjs/common` 包导入。

```typescript
@Post()
@Header('Cache-Control', 'this is a header')
fun2() {
    return 'Header'
}
```

通过Apifox发送请求可以看到：

![image-20230328221940935](https://imagecloud.zhaozeyu.top/2023/03/28/6422f77cf3f8f.png)

### 重定向

要将响应重定向到特定的 `URL`，可以使用 `@Redirect()` 装饰器或特定于库的响应对象（并直接调用 `res.redirect()`）。

`@Redirect()` 装饰器有两个可选参数，`url` 和 `statusCode`。 如果省略，则 `statusCode` 默认为 `302`。

```typescript
@Get()
@Redirect('https://www.zhaozeyu.top',302)
fun1() {
    return {
        code: 0,
        message: '路由重定向'
    }
}
```

如果访问`http://localhost:3000/cats`会被重定向到`https://www.zhaozeyu.top`。

有时您可能想动态地决定 HTTP 状态代码或重定向 URL。通过从路由处理方法返回一个如下格式的对象：

```json
{
  "url": string,
  "statusCode": number
}Copy to clipboardErrorCopied
```

返回的值将覆盖传递给 `@Redirect()`装饰器的所有参数。 例如：

```typescript
@Get()
@Redirect('https://www.zhaozeyu.top', 302)
fun1(@Query('version') version) {
    if (version && version === '1') {
        return {
            url: 'https://docs.nestjs.cn',
            statusCode: 301
        }
    }
}
```

如果访问`http://localhost:3000/cats?version=1`会被重定向到`https://docs.nestjs.cn`。

### 路由参数

当您需要接受**动态数据**（dynamic data）作为请求的一部分时（例如，使用`GET /cats/1` 来获取 id 为 `1` 的 `cat`），带有静态路径的路由将无法工作。为了定义带参数的路由，我们可以在路由路径中添加路由参数**标记**（token）以捕获请求 URL 中该位置的动态值。下面的 `@Get()` 装饰器示例中的路由参数标记（route parameter token）演示了此用法。以这种方式声明的路由参数可以使用 `@Param()` 装饰器访问，该装饰器应添加到函数签名中。

> `Param` 需要从 `@nestjs/common` 包导入。

```typescript
@Get(':id')
fun1(@Param() param) {
    console.log(param.id)
    return `路由动态参数id为${param.id}。`
}
```

当我们访问`http://localhost:3000/cats/1`，我们会得到响应`路由动态参数id为1。`

`@Param()` 用于修饰一个方法的参数（上面示例中的 `params`），并在该方法内将**路由参数**作为被修饰的方法参数的属性。如上面的代码所示，我们可以通过引用 `params.id`来访问（路由路径中的） `id` 参数。 您还可以将特定的参数标记传递给装饰器，然后在方法主体中按参数名称直接引用路由参数。

### 子域路由

`@Controller` 装饰器可以接受一个 `host` 选项，以要求传入请求的 `HTTP` 主机匹配某个特定值。

```typescript
@Controller({
    host: 'admin.example.com'
})
export class CatsController {
    @Get(':id')
    fun1() {
        return '子域路由'
    }
}
```

与一个路由路径 `path` 类似，该 `hosts` 选项可以使用参数标识（token）来捕获主机名中该位置的动态值。下面的 `@Controller()` 装饰器示例中的主机参数标识（host parameter token）演示了此用法。可以使用 `@HostParam()` 装饰器访问以这种方式声明的主机参数，该装饰器应添加到方法签名中。

```typescript
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
```

### 作用域

对于来自不同编程语言背景的人来说，可能对 Nest 中几乎所有内容都可以在传入的请求之间共享感到非常意外。例如，我们有一个数据库连接池，具有全局状态的单例服务等。请记住，`Node.js` 并不遵循请求/响应多线程无状态模型（在该模型中，每个请求都由单独的线程处理），在 Nest 中，每个请求都由主线程处理。因此，使用单例实例对我们的应用程序来说是完全安全的。

但是，存在基于请求的控制器生命周期可能是期望行为的边缘情况，例如 `GraphQL` 应用程序中的请求缓存，请求跟踪或多租户。

### 异步性

我们酷爱现代 Javascript，并且我们知道数据读取（data extraction）大多是**异步**的。这就是为什么 Nest 完美支持**异步函数**（Async Function）特性的原因。

了解更多关于 `Async / await` 请点击[这里](https://kamilmysliwiec.com/typescript-2-1-introduction-async-await)。

每个异步函数都必须返回一个 `Promise`。这意味着您可以返回延迟值，而 Nest 将自行解析它。让我们看看下面这个例子:

> cats.controller.ts

```typescript
@Get()
async fun(): Promise<any[]> {
  return [];
}
```

这是完全有效的。此外，通过返回 RxJS [observable 流]([RxJS - Observable](https://rxjs.dev/guide/observable))，Nest 路由处理程序将更加强大。 Nest 将自动订阅下面的源并获取最后发出的值（在流完成后）。

> cats.controller.ts

```typescript
@Get()
fun(): Observable<any[]> {
  return of([]);
}
```

上述的两种方法都是可行的，你可以选择你喜欢的方式。

### 请求负载

此前我们列举的的 `POST` 路由处理程序样例中，处理程序没有接受任何客户端参数。我们在这里通过添加 `@Body()` 参数来解决这个问题。

首先（如果您使用 TypeScript），我们需要确定 `DTO`（数据传输对象）模式。`DTO`是一个对象，它定义了如何通过网络发送数据。我们可以通过使用 **TypeScript** 接口（Interface）或简单的类（Class）来定义 DTO 模式。有趣的是，我们在这里推荐使用**类**。为什么？类是 JavaScript ES6 标准的一部分，因此它们在编译后的 JavaScript 中被保留为实际实体。另一方面，由于 TypeScript 接口在转换过程中被删除，所以 Nest 不能在运行时引用它们。这一点很重要，因为诸如**管道**（Pipe）之类的特性为在运行时访问变量的元类型提供更多的可能性。

现在，我们来创建 `CreateCatDto` 类：

```typescript
/*
  create-cat.dto.ts
*/
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
```

它只有三个基本属性。 之后，我们可以在 `CatsController` 中使用新创建的`DTO`：

> cats.controller.ts

```typescript
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return '这里创建一个新的cat';
}
```

`Nest CLI` 提供了一个能够自动生成所有这些模板代码的生成器，它帮助我们规避手动建立这些文件，并使开发体验变得更加简单。在[这里](https://docs.nestjs.cn/8/recipes?id=crud生成器)阅读关于该功能的更多信息。

### 最后一步

控制器已经准备就绪，可以使用，但是 Nest 依然不知道 `CatsController` 是否存在，所以它不会创建这个类的一个实例。

控制器总是属于模块，这就是为什么我们在 `@Module()` 装饰器中包含 `controllers` 数组的原因。 由于除了根模块 `AppModule`之外，我们还没有定义其他模块，所以我们将使用它来介绍 `CatsController`：

> app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';

@Module({
  controllers: [CatsController],
})
export class AppModule {}
```

我们使用 `@Module()` 装饰器将元数据附加到模块类中，现在，Nest 可以轻松反射（reflect）出哪些控制器（controller）必须被安装。

### 类库特有方式

到目前为止，我们已经讨论了 Nest 操作响应的标准方式。操作响应的第二种方法是使用类库特有的[响应对象(Response)](http://expressjs.com/en/api.html#res)。为了注入特定的响应对象，我们需要使用 `@Res()` 装饰器。为了对比差异，让我们来重写 `CatsController`：

> cats.controller.ts

```typescript
import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }
}
```

尽管此方法有效，并且实际上通过提供对响应对象的完全控制（标头操作，特定于库的功能等）在某些方面提供了更大的灵活性，但应谨慎使用此种方法。通常来说，这种方式非常不清晰，并且有一些缺点。 主要的缺点是你的代码变得依赖于平台（因为不同的底层库在响应对象（Response）上可能具有不同的 API），并且更加难以测试（您必须模拟响应对象等）。

而且，在上面的示例中，你失去与依赖于 Nest 标准响应处理的 Nest 功能（例如，拦截器（Interceptors） 和 `@HttpCode()`/`@Header()` 装饰器）的兼容性。要解决此问题，可以将 `passthrough` 选项设置为 `true`，如下所示：

```typescript
@Get()
findAll(@Res({ passthrough: true }) res: Response) {
  res.status(HttpStatus.OK);
  return [];
}
```

现在，你就能与底层框架原生的响应对象（Response）进行交互（例如，根据特定条件设置 Cookie 或 HTTP 头），并将剩余的部分留给 Nest 处理。
