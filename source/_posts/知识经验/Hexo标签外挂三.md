---
title: Hexo标签外挂三
date: 2023-03-20 18:27:25
ai: 暂无预设简介，请点击下方AI实时简介按钮。
description: 插件tag-plugins-plus的标签外挂写法。
cover: https://imagecloud.zhaozeyu.top/2023/03/27/642171ae0d99b.webp
background: url(https://imagecloud.zhaozeyu.top/2023/03/27/642171ae0d99b.webp)
swiper_index: 4
categories:
  - 知识经验
tags:
  - Hexo
  - 标签外挂
---

## 前提

> 此教程中的写法需要依赖 `Tag Plugins Plus` 插件

### 安装

```markdown
npm install hexo-butterfly-tag-plugins-plus --save
```

考虑到hexo自带的markdown渲染插件hexo-renderer-marked与外挂标签语法的兼容性较差，建议您将其替换成hexo-renderer-kramed

```markdown
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save
```

### 配置

在站点配置文件_config.yml或者主题配置文件_config.butterfly.yml中添加：

```yaml
# tag-plugins-plus
# see https://akilar.top/posts/615e2dec/
tag_plugins:
  enable: true # 开关
  priority: 5 # 过滤器优先权
  issues: false # issues标签依赖注入开关
  link:
    placeholder: /img/link.png # link_card标签默认的图标图片
  CDN:
    anima: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/font-awesome-animation.min.css # 动画标签anima的依赖
    jquery: https://npm.elemecdn.com/jquery@latest/dist/jquery.min.js # issues标签依赖
    issues: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/issues.js #issues标签依赖
    iconfont: //at.alicdn.com/t/font_2032782_8d5kxvn09md.js # 参看 https://akilar.top/posts/d2ebecef/
    carousel: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/carousel-touch.js
    tag_plugins_css: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/tag_plugins.css
```

## 语法

### 行内文本样式 text

语法：

```markdown
{% u 文本内容 %}
{% emp 文本内容 %}
{% wavy 文本内容 %}
{% del 文本内容 %}
{% kbd 文本内容 %}
{% psw 文本内容 %}
```

示例：

```markdown
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}
```

效果：

1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}

### 行内文本 span

语法：

```markdown
{% span 样式参数(参数以空格划分), 文本内容 %}
```

参数：

1. 字体: logo, code
2. 颜色: red,yellow,green,cyan,blue,gray
3. 大小: small, h4, h3, h2, h1, large, huge, ultra
4. 对齐方向: left, center, right

示例：

```markdown
- 彩色文字
  在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span
  cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
  文档「开始」页面中的标题部分就是超大号文字。
  {% span center logo large, Volantis %}
  {% span center small, A Wonderful Theme for Hexo %}
```

效果：

- 彩色文字
  在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span
  cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
  文档「开始」页面中的标题部分就是超大号文字。
  {% span center logo large, Volantis %}
  {% span center small, A Wonderful Theme for Hexo %}

### 段落文本 p

语法：

```markdown
{% p 样式参数(参数以空格划分), 文本内容 %}
```

参数：

1. 字体: logo, code
2. 颜色: red,yellow,green,cyan,blue,gray
3. 大小: small, h4, h3, h2, h1, large, huge, ultra
4. 对齐方向: left, center, right

示例：

{% tabs test1 %}

<!-- tab 代码 -->

```markdown
- 彩色文字
  在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{%
  p blue, 蓝色 %}、{% p gray, 灰色 %}。
- 超大号文字
  文档「开始」页面中的标题部分就是超大号文字。
  {% p center logo large, Volantis %}
  {% p center small, A Wonderful Theme for Hexo %}
```

<!-- endtab -->

<!-- tab 效果 -->
彩色文字
在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p
blue, 蓝色 %}、{% p gray, 灰色 %}。
超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}
<!-- endtab -->

{% endtabs %}

### 上标标签 tip

语法：

```markdown
{% tip [参数，可选] %}文本内容{% endtip %}
```

参数：

样式: success,error,warning,bolt,ban,home,sync,cogs,key,bell
自定义图标: 支持fontawesome。

示例：

```markdown
{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}
```

效果：

{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}

### 动态标签 anima

语法：

```markdown
{% tip [参数，可选] %}文本内容{% endtip %}
```

参数：

将所需的CSS类添加到图标（或DOM中的任何元素）。
对于父级悬停样式，需要给目标元素添加指定CSS类，同时还要给目标元素的父级元素添加CSS类faa-parent animated-hover。（详情见示例及示例源码）
You can regulate the speed of the animation by adding the CSS class or . faa-fastfaa-slow
可以通过给目标元素添加CSS类faa-fast或faa-slow来控制动画快慢。

示例：

1.On DOM load（当页面加载时显示动画）

```markdown
{% tip warning faa-horizontal animated %}warning{% endtip %}
{% tip ban faa-flash animated %}ban{% endtip %}
```

2.调整动画速度

```markdown
{% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
{% tip ban faa-flash animated faa-slow %}ban{% endtip %}
```

3.On hover（当鼠标悬停时显示动画）

```markdown
{% tip warning faa-horizontal animated-hover %}warning{% endtip %}
{% tip ban faa-flash animated-hover %}ban{% endtip %}
```

4.On parent hover（当鼠标悬停在父级元素时显示动画）

```markdown
{% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
{% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}
```

效果：

1.On DOM load（当页面加载时显示动画）

{% tip warning faa-horizontal animated %}warning{% endtip %}
{% tip ban faa-flash animated %}ban{% endtip %}

2.调整动画速度

{% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
{% tip ban faa-flash animated faa-slow %}ban{% endtip %}

3.On hover（当鼠标悬停时显示动画）

{% tip warning faa-horizontal animated-hover %}warning{% endtip %}
{% tip ban faa-flash animated-hover %}ban{% endtip %}

4.On parent hover（当鼠标悬停在父级元素时显示动画）

{% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
{% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}

### 复选列表 checkbox

语法：

```markdown
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```

参数：

样式: plus, minus, times
颜色: red,yellow,green,cyan,blue,gray
选中状态: checked

示例：

```markdown
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
```

效果：

{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}

### 单选列表 radio

语法：

```markdown
{% radio 样式参数（可选）, 文本（支持简单md） %}
```

参数：

颜色: red,yellow,green,cyan,blue,gray
选中状态: checked

示例：

```markdown
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```

效果：

{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}

### 时间轴 timeline

语法：

```markdown
{% timeline 时间线标题（可选）[,color] %}
<!-- timeline 时间节点（标题） -->
正文内容
<!-- endtimeline -->
<!-- timeline 时间节点（标题） -->
正文内容
<!-- endtimeline -->
{% endtimeline %}
```

参数：

title:标题/时间线
color:timeline颜色:default(留空) / blue / pink / red / purple / orange / green

示例：

```markdown
{% timeline 时间轴样式,blue %}

<!-- timeline 2023-03-29 更新主题 -->

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

<!-- endtimeline -->

<!-- timeline 2023-03-25 迭代 -->
不需要额外处理。
<!-- endtimeline -->

<!-- timeline 2023-03-20 修改一 -->

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
3. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

<!-- endtimeline -->

{% endtimeline %}
```

效果：

{% timeline 时间轴样式,blue %}

<!-- timeline 2023-03-29 更新主题 -->

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。
   <!-- endtimeline -->

<!-- timeline 2023-03-25 迭代 -->
不需要额外处理。
<!-- endtimeline -->

<!-- timeline 2023-03-20 修改一 -->

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
3. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。
   <!-- endtimeline -->

{% endtimeline %}

### 链接卡片 link

语法：

```markdown
{% link 标题, 链接, 图片链接（可选） %}
```

示例：

```markdown
{% link 呓语の小屋, https://www.zhaozeyu.top/, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
```

效果：

{% link 呓语の小屋, https://www.zhaozeyu.top/, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}

### 按钮 btn

语法：

```markdown
{% btns 样式参数 %}
{% cell 标题, 链接, 图片或者图标 %}
{% cell 标题, 链接, 图片或者图标 %}
{% endbtns %}
```

参数：

1. 圆角样式：rounded, circle
2. 增加文字样式：可以在容器内增加 <b>标题</b>和<p>描述文字</p>
3. 布局方式：
   默认为自动宽度，适合视野内只有一两个的情况。

| 参数     | 含义                  |
|--------|---------------------|
| wide   | 宽一点的按钮              |
| fill   | 填充布局，自动铺满至少一行，多了会换行 |
| center | 居中，按钮之间是固定间距        |
| around | 居中分散                |
| grid2  | 等宽最多2列，屏幕变窄会适当减少列数  |
| grid3  | 等宽最多3列，屏幕变窄会适当减少列数  |
| grid4  | 等宽最多4列，屏幕变窄会适当减少列数  |
| grid5  | 等宽最多5列，屏幕变窄会适当减少列数  |

示例：

1.如果需要显示类似「团队成员」之类的一组含有头像的链接

```markdown
{% btns circle grid5 %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% endbtns %}
```

效果：

{% btns circle grid5 %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% cell 是zzy呀, https://www.zhaozeyu.top, https://imagecloud.zhaozeyu.top/2023/03/10/640afab14b960.jpg %}
{% endbtns %}

2.或者含有图标的按钮

```markdown
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}
```

效果：

{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}

3.圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中

{% btns circle center grid5 %}

<a href='https://apps.apple.com/cn/app/%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1/id1321803705'>
<i class='fab fa-apple'></i>
<b>和平精英</b>
{% p red, 专业版 %}
<img src='https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/4b/7e/f2/4b7ef2f5-d4ee-5d88-1911-2f6cabd3cd05/AppIcon-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp'>
</a>

<a href='https://apps.apple.com/cn/app/qq%E9%A3%9E%E8%BD%A6/id1235504705'>
<i class='fab fa-apple'></i>
<b>QQ飞车</b>
{% p green, 免费版 %}
<img src='https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/70/1e/93/701e939e-f1fa-7586-bb29-89537aa5ecec/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp'>
</a>

{% endbtns %}

### github卡片 ghcard

语法：

```markdown
{% ghcard 用户名, 其它参数（可选） %}
{% ghcard 用户名/仓库, 其它参数（可选） %}
```

参数：

使用 `,` 分割各个参数。写法为：`参数名=参数值`
以下只写几个常用参数值：

| 参数名           | 取值                                                                                                     | 释义               |
|---------------|--------------------------------------------------------------------------------------------------------|------------------|
| hide          | stars,commits,prs,issues,contribs                                                                      | 隐藏指定统计           |
| count_private | true                                                                                                   | 将私人项目贡献添加到总提交计数中 |
| show_icons    | true                                                                                                   | 显示图标             |
| theme         | 查阅:[Available Themes](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) | 主题               |

示例：

1.用户信息卡片

```markdown
| {% ghcard zzy-cl %}                | {% ghcard zzy-cl, theme=vue %}             |
|------------------------------------|--------------------------------------------|
| {% ghcard zzy-cl, theme=buefy %}   | {% ghcard zzy-cl, theme=solarized-light %} |
| {% ghcard zzy-cl, theme=onedark %} | {% ghcard zzy-cl, theme=solarized-dark %}  |
| {% ghcard zzy-cl, theme=algolia %} | {% ghcard zzy-cl, theme=calm %}            |
```

效果（需要科学上网才看得到）：

| {% ghcard zzy-cl %}                | {% ghcard zzy-cl, theme=vue %}             |
|------------------------------------|--------------------------------------------|
| {% ghcard zzy-cl, theme=buefy %}   | {% ghcard zzy-cl, theme=solarized-light %} |
| {% ghcard zzy-cl, theme=onedark %} | {% ghcard zzy-cl, theme=solarized-dark %}  |
| {% ghcard zzy-cl, theme=algolia %} | {% ghcard zzy-cl, theme=calm %}            |

2.仓库信息卡片

```markdown
| {% ghcard volantis-x/hexo-theme-volantis %}                | {% ghcard volantis-x/hexo-theme-volantis, theme=vue %}             |
|------------------------------------------------------------|--------------------------------------------------------------------|
| {% ghcard volantis-x/hexo-theme-volantis, theme=buefy %}   | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-light %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=onedark %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-dark %}  |
| {% ghcard volantis-x/hexo-theme-volantis, theme=algolia %} | {% ghcard volantis-x/hexo-theme-volantis, theme=calm %}            |
```

效果（需要科学上网才看得到）：

| {% ghcard volantis-x/hexo-theme-volantis %}                | {% ghcard volantis-x/hexo-theme-volantis, theme=vue %}             |
|------------------------------------------------------------|--------------------------------------------------------------------|
| {% ghcard volantis-x/hexo-theme-volantis, theme=buefy %}   | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-light %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=onedark %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-dark %}  |
| {% ghcard volantis-x/hexo-theme-volantis, theme=algolia %} | {% ghcard volantis-x/hexo-theme-volantis, theme=calm %}            |

### github徽标 ghbdage

语法：

```markdown
{% bdage [right],[left],[logo]||[color],[link],[title]||[option] %}
```

参数：

1. left：徽标左边的信息，必选参数。
2. right: 徽标右边的信息，必选参数，
3. logo：徽标图标，图标名称详见simpleicons，可选参数。
4. color：徽标右边的颜色，可选参数。
5. link：指向的链接，可选参数。
6. title：徽标的额外信息，可选参数。主要用于优化SEO，但object标签不会像a标签一样在鼠标悬停显示title信息。
7. option：自定义参数，支持shields.io的全部API参数支持，具体参数可以参看上文中的拓展写法示例。形式为name1=value2&name2=value2。

示例：

1.基本参数,定义徽标左右文字和图标

```markdown
{% bdage Theme,Butterfly %}
{% bdage Frame,Hexo,hexo %}
```

效果：

{% bdage Theme,Butterfly %}
{% bdage Frame,Hexo,hexo %}

2.信息参数，定义徽标右侧内容背景色，指向链接

```markdown
{% bdage CDN,JsDelivr,jsDelivr||green,https://www.jsdelivr.com/ %}

如果是跨顺序省略可选参数，仍然需要写个逗号,用作分割
{% bdage Source,GitHub,GitHub||,https://github.com/ %}
```

效果：

{% bdage CDN,JsDelivr,jsDelivr||green,https://www.jsdelivr.com %}

如果是跨顺序省略可选参数，仍然需要写个逗号,用作分割
{% bdage Source,GitHub,GitHub||,https://github.com %}

3.拓展参数，支持shields的API的全部参数内容

```markdown
{% bdage Hosted,Vercel,Vercel||green,https://vercel.com
,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=20 %}

如果是跨顺序省略可选参数组，仍然需要写双竖线||用作分割
{% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=20&logoColor=violet %}
```

{% bdage Hosted,Vercel,Vercel||green,https://vercel.com
,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=20 %}

如果是跨顺序省略可选参数组，仍然需要写双竖线||用作分割
{% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=20&logoColor=violet %}

### 网站卡片 sites

语法：

```markdown
{% sitegroup %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% endsitegroup %}
```

示例：

```markdown
{% sitegroup %}
{% site 画江湖之不良人6, url=https://v.qq.com/x/cover/mzc00200cgo4wcc/r00454x3b5p.html,
screenshot=https://imagecloud.zhaozeyu.top/2023/03/20/64187953d3e2a.webp,
avatar=https://imagecloud.zhaozeyu.top/2023/03/20/64187953d3e2a.webp,
description=监国独揽朝政，漠北大军来势汹汹，岐国独木难支，且看李星云如何带领不良人绝地反击！ %}
{% site 吞噬星空, url=https://v.qq.com/x/cover/324olz7ilvo2j5f/i00350r6rf4.html,
screenshot=https://imagecloud.zhaozeyu.top/2023/03/20/64187a670492c.webp,
avatar=https://imagecloud.zhaozeyu.top/2023/03/20/64187a670492c.webp,
description=某一天，地球上出现了不明来由的RR病毒，将世界卷入灾难之中。 %}
{% site 完美世界, url=https://v.qq.com/x/cover/mcv8hkc8zk8lnov/x0036x5qqsr.html,
screenshot=https://imagecloud.zhaozeyu.top/2023/03/20/64187b0d2faae.webp,
avatar=https://imagecloud.zhaozeyu.top/2023/03/20/64187b0d2faae.webp,
description=他为修道而生，为应劫而至，他身化亿万血雨，洒落万古岁月，经历无数时空的熬炼，岁月长河的洗礼，他化万古，他化自在。 %}
{% site 斗破苍穹, url=https://v.qq.com/x/cover/mzc0020027yzd9e/q0043cz9x20.html,
screenshot=https://imagecloud.zhaozeyu.top/2023/03/20/64187bf908796.webp,
avatar=https://imagecloud.zhaozeyu.top/2023/03/20/64187bf908796.webp,
description=三年之约后，萧炎终于在迦南学院见到了薰儿，此后他广交挚友并成立磐门。 %}
{% endsitegroup %}
```

效果：

{% sitegroup %}
{% site 画江湖之不良人6, url=https://v.qq.com/x/cover/mzc00200cgo4wcc/r00454x3b5p.html,
screenshot=https://imagecloud.zhaozeyu.top/2023/03/20/64187953d3e2a.webp,
avatar=https://imagecloud.zhaozeyu.top/2023/03/20/64187953d3e2a.webp,
description=监国独揽朝政，漠北大军来势汹汹，岐国独木难支，且看李星云如何带领不良人绝地反击！ %}
{% site 吞噬星空, url=https://v.qq.com/x/cover/324olz7ilvo2j5f/i00350r6rf4.html,
screenshot=https://imagecloud.zhaozeyu.top/2023/03/20/64187a670492c.webp,
avatar=https://imagecloud.zhaozeyu.top/2023/03/20/64187a670492c.webp,
description=某一天，地球上出现了不明来由的RR病毒，将世界卷入灾难之中。 %}
{% site 完美世界, url=https://v.qq.com/x/cover/mcv8hkc8zk8lnov/x0036x5qqsr.html,
screenshot=https://imagecloud.zhaozeyu.top/2023/03/20/64187b0d2faae.webp,
avatar=https://imagecloud.zhaozeyu.top/2023/03/20/64187b0d2faae.webp,
description=他为修道而生，为应劫而至，他身化亿万血雨，洒落万古岁月，经历无数时空的熬炼，岁月长河的洗礼，他化万古，他化自在。 %}
{% site 斗破苍穹, url=https://v.qq.com/x/cover/mzc0020027yzd9e/q0043cz9x20.html,
screenshot=https://imagecloud.zhaozeyu.top/2023/03/20/64187bf908796.webp,
avatar=https://imagecloud.zhaozeyu.top/2023/03/20/64187bf908796.webp,
description=三年之约后，萧炎终于在迦南学院见到了薰儿，此后他广交挚友并成立磐门。 %}
{% endsitegroup %}

### 行内图片 inlineimage

语法：

```markdown
{% inlineimage 图片链接, height=高度（可选） %}
```

参数：

1. 高度：height=20px

示例：

```markdown
这是 {% inlineimage https://imagecloud.zhaozeyu.top/2023/03/20/64187da902b36.gif %} 一段话。

这又是 {% inlineimage https://imagecloud.zhaozeyu.top/2023/03/20/64187da8f2cf3.gif, height=40px %} 一段话。
```

效果：

这是 {% inlineimage https://imagecloud.zhaozeyu.top/2023/03/20/64187da902b36.gif %} 一段话。

这又是 {% inlineimage https://imagecloud.zhaozeyu.top/2023/03/20/64187da8f2cf3.gif, height=40px %} 一段话。

### 单张图片 image

语法：

```markdown
{% image 链接, width=宽度（可选）, height=高度（可选）, alt=描述（可选）, bg=占位颜色（可选） %}
```

参数：

1. 图片宽度高度：width=300px, height=32px
2. 图片描述：alt=图片描述（butterfly需要在主题配置文件中开启图片描述）
3. 占位背景色：bg=#f2f2f2

示例：

1.添加描述：

```markdown
{% image https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}
```

效果：

{% image https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}

2.指定宽度

```markdown
{% image https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg, width=400px %}
```

效果：

{% image https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg, width=400px %}

3.指定宽度并添加描述：

```markdown
{% image https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg, width=400px,
alt=每天下课回宿舍的路，没有什么故事。 %}
```

效果：

{% image https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg, width=400px,
alt=每天下课回宿舍的路，没有什么故事。 %}

4.设置占位背景色：

```markdown
{% image https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg, width=400px, bg=#1D0C04,
alt=优化不同宽度浏览的观感 %}
```

效果：

{% image https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg, width=400px, bg=#1D0C04,
alt=优化不同宽度浏览的观感 %}

### 音频 audio

语法：

```markdown
{% audio 音频链接 %}
```

示例：

```markdown
{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}
```

效果：

{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}

### 视频 video

语法：

```markdown
{% video 视频链接 %}
```

标签语法：

1. 对齐方向：left, center, right
2. 列数：逗号后面直接写列数，支持 1 ～ 4 列。

示例：

1.100%宽度

```markdown
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
```

效果：

{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}

2.50%宽度

```markdown
{% videos, 2 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```

效果：

{% videos, 2 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

3.25%宽度

```markdown
{% videos, 4 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```

效果：

{% videos, 4 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

### 折叠框 folding

语法：

```markdown
{% folding 参数（可选）, 标题 %}
![](https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg)
{% endfolding %}
```

参数：

1. 颜色：blue, cyan, green, yellow, red
2. 状态：状态填写 open 代表默认打开。

示例：

```markdown
{% folding 查看图片测试 %}
![](https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg)
{% endfolding %}
```

{% folding 查看图片测试 %}
![](https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg)
{% endfolding %}

```markdown
{% folding cyan open, 查看默认打开的折叠框 %}
这是一个默认打开的折叠框。
{% endfolding %}
```

{% folding cyan open, 查看默认打开的折叠框 %}
这是一个默认打开的折叠框。
{% endfolding %}

```markdown
{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}
```

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

```markdown
{% folding yellow, 查看列表测试 %}

- 赵泽宇
- 李花花
  {% endfolding %}
```

{% folding yellow, 查看列表测试 %}

- 赵泽宇
- 李花花
  {% endfolding %}

```markdown
{% folding red, 查看嵌套测试 %}
{% folding blue, 查看嵌套测试2 %}
{% folding 查看嵌套测试3 %}
这是一张图片<span><img src='https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg' style='height:24px'></span>
{% endfolding %}
{% endfolding %}
{% endfolding %}
```

{% folding red, 查看嵌套测试 %}
{% folding blue, 查看嵌套测试2 %}
{% folding 查看嵌套测试3 %}
这是一张图片<span><img src='https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg' style='height:24px'></span>
{% endfolding %}
{% endfolding %}
{% endfolding %}

### 分栏 tab

语法：

```markdown
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}
```

参数：

Unique name :

- 选项卡块标签的唯一名称，不带逗号。
- 将在#id中用作每个标签及其索引号的前缀。
- 如果名称中包含空格，则对于生成#id，所有空格将由破折号代替。
- 仅当前帖子/页面的URL必须是唯一的！

[index]:

- 活动选项卡的索引号。
- 如果未指定，将选择第一个标签（1）。
- 如果index为-1，则不会选择任何选项卡。
- 可选参数。

[Tab caption]:

- 当前选项卡的标题。
- 如果未指定标题，则带有制表符索引后缀的唯一名称将用作制表符的标题。
- 如果未指定标题，但指定了图标，则标题将为空。
- 可选参数。

[@icon]:

- FontAwesome图标名称（全名，看起来像“ fas fa-font”）
- 可以指定带空格或不带空格；
- 例如 `Tab caption @icon` 和 `Tab caption@icon`。
- 可选参数。

示例：

1.Demo 1 - 预设选择第一个【默认】

```markdown
{% tabs test1 %}
<!-- tab -->
**这是 Tab1。**
<!-- endtab -->

<!-- tab -->
**这是 Tab2。**
<!-- endtab -->

<!-- tab -->
**这是 Tab3。**
<!-- endtab -->
{% endtabs %}
```

{% tabs test1 %}
<!-- tab -->
**这是 Tab1。**
<!-- endtab -->

<!-- tab -->
**这是 Tab2。**
<!-- endtab -->

<!-- tab -->
**这是 Tab3。**
<!-- endtab -->
{% endtabs %}

2.Demo 2 - 预设选择tabs

```markdown
{% tabs test2, 3 %}
<!-- tab -->
**这是 Tab1。**
<!-- endtab -->

<!-- tab -->
**这是 Tab2。**
<!-- endtab -->

<!-- tab -->
**这是 Tab3。**
<!-- endtab -->
{% endtabs %}
```

{% tabs test2, 3 %}
<!-- tab -->
**这是 Tab1。**
<!-- endtab -->

<!-- tab -->
**这是 Tab2。**
<!-- endtab -->

<!-- tab -->
**这是 Tab3。**
<!-- endtab -->
{% endtabs %}

3.Demo 3 - 没有预设值

```markdown
{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

4.Demo 4 - 自定义Tab名 + 只有icon + icon和Tab名

```markdown
{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}
```

{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}

### 诗词标签 poem

语法：

```markdown
{% poem title,author %}
诗词内容
{% endpoem %}
```

参数：

1. title：诗词标题
2. author：作者，可以不写

示例：

```markdown
{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}
```

效果：

{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}

### 阿里图标 iconfont

语法：

```markdown
{% icon [icon-xxxx],[font-size] %}
```

参数：

1. icon-xxxx：表示图标font-class,可以在自己的阿里矢量图标库项目的font-class引用方案内查询并复制。
2. font-size：表示图标大小，直接填写数字即可，单位为em。图标大小默认值为1em。

示例：

```markdown
{% icon icon-shu %}
{% icon icon-niu,2 %}
{% icon icon-hu,3 %}
{% icon icon-tu,4 %}

{% icon icon-long %}
{% icon icon-she,2 %}
{% icon icon-ma,3 %}
{% icon icon-yang,4 %}

{% icon icon-hou %}
{% icon icon-ji,2 %}
{% icon icon-gou,3 %}
{% icon icon-zhu,4 %}
```

效果;

{% icon icon-shu %}
{% icon icon-niu,2 %}
{% icon icon-hu,3 %}
{% icon icon-tu,4 %}

{% icon icon-long %}
{% icon icon-she,2 %}
{% icon icon-ma,3 %}
{% icon icon-yang,4 %}

{% icon icon-hou %}
{% icon icon-ji,2 %}
{% icon icon-gou,3 %}
{% icon icon-zhu,4 %}

### 特效标签wow

语法：

```markdown
{% wow [animete],[duration],[delay],[offset],[iteration] %}
内容
{% endwow %}
```

参数：

1. animate: 动画样式，效果详见[animate.css](https://animate.style/)参考文档
2. duration: 选填项，动画持续时间，单位可以是ms也可以是s。例如3s，700ms。
3. delay: 选填项，动画开始的延迟时间，单位可以是ms也可以是s。例如3s，700ms。
4. offset: 选填项，开始动画的距离（相对浏览器底部）
5. iteration: 选填项，动画重复的次数

示例：

1.flip动画效果。

```markdown
{% wow animate__flip,5s,5s,100,10 %}
{% note blue 'fas fa-bullhorn' modern%}
`zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次
{% endnote %}
{% endwow %}
```

效果：

{% wow animate__flip,5s,5s,100,10 %}
{% note blue 'fas fa-bullhorn' modern%}
`zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次
{% endnote %}
{% endwow %}

2.zoomIn动画效果，持续5s，延时5s，离底部100距离时启动，重复10次

```markdown
{% wow animate__zoomIn,5s,5s,100,10 %}
{% note blue 'fas fa-bullhorn' modern%}
`zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次
{% endnote %}
{% endwow %}
```

效果：

{% wow animate__zoomIn,5s,5s,100,10 %}
{% note blue 'fas fa-bullhorn' modern%}
`zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次
{% endnote %}
{% endwow %}

3.slideInRight动画效果，持续5s，延时5s

```markdown
{% wow animate__slideInRight,5s,5s %}
{% note orange 'fas fa-car' modern%}
`slideInRight`动画效果，持续`5s`，延时`5s`。
{% endnote %}
{% endwow %}
```

效果：

{% wow animate__slideInRight,5s,5s %}
{% note orange 'fas fa-car' modern%}
`slideInRight`动画效果，持续`5s`，延时`5s`。
{% endnote %}
{% endwow %}

4.heartBeat动画效果，延时5s，重复10次。此处注意不用的参数位置要留空，用逗号间隔。

```markdown
{% wow animate__heartBeat,,5s,,10 %}
{% note red 'fas fa-battery-half' modern%}
`heartBeat`动画效果，延时`5s`，重复`10`次。
{% endnote %}
{% endwow %}
```

效果：

{% wow animate__heartBeat,,5s,,10 %}
{% note red 'fas fa-battery-half' modern%}
`heartBeat`动画效果，延时`5s`，重复`10`次。
{% endnote %}
{% endwow %}

### 进度条 progress

语法：

```markdown
{% progress [width] [color] [text] %}
```

参数：

1. width: 0到100的阿拉伯数字
2. color: 颜色，取值有red,yellow,green,cyan,blue,gray
3. text:进度条上的文字内容

示例：

```markdown
{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}
```

效果：

{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}

### 注释 notation

语法：

```markdown
{% nota [label] , [text] %}
```

参数：

1. label: 注释词汇
2. text: 悬停显示的注解内容

示例：

```markdown
{% nota 把鼠标移动到我上面试试 ,可以看到注解内容出现在顶栏 %}
```

效果：

{% nota 把鼠标移动到我上面试试 ,可以看到注解内容出现在顶栏 %}

### 气泡注释 bubble

语法：

```markdown
{% bubble [content] , [notation] ,[background-color] %}
```

参数：

1. label: 注释词汇
2. text: 悬停显示的注解内容

示例：

```markdown
最近我学到了不少新玩意儿（虽然对很多大佬来说这些已经是旧技术了），比如CSS的{% bubble 兄弟相邻选择器,"例如 h1 + p
{margin-top:50px;}" %}，{% bubble flex布局,"Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性","
#ec5830" %}，{% bubble transform变换,"transform 属性向元素应用 2D 或 3D
转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。","#1db675" %}，animation的{% bubble 贝塞尔速度曲线,"贝塞尔曲线(Bézier
curve)
，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋","
#de4489" %}写法，还有今天刚看到的{% bubble clip-path,"
clip-path属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。","#868fd7"
%}属性。这些对我来说很新颖的概念狠狠的冲击着我以前积累起来的设计思路。
```

效果：

最近我学到了不少新玩意儿（虽然对很多大佬来说这些已经是旧技术了），比如CSS的{% bubble 兄弟相邻选择器,"例如 h1 + p
{margin-top:50px;}" %}，{% bubble flex布局,"Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性","
#ec5830" %}，{% bubble transform变换,"transform 属性向元素应用 2D 或 3D
转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。","#1db675" %}，animation的{% bubble 贝塞尔速度曲线,"贝塞尔曲线(Bézier
curve)
，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋","
#de4489" %}写法，还有今天刚看到的{% bubble clip-path,"
clip-path属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。","#868fd7"
%}属性。这些对我来说很新颖的概念狠狠的冲击着我以前积累起来的设计思路。

### 引用文献 reference

语法：

```markdown
{% referto [id] , [literature] %}
{% referfrom [id] , [literature] , [url] %}
```

参数：

1. referto 引用上标
   id: 上标序号内容，需与referfrom标签的id对应才能实现跳转
   literature: 引用的参考文献名称

2. referfrom 引用出处
   id: 序号内容，需与referto标签的id对应才能实现 跳转
   literature: 引用的参考文献名称
   url: 引用的参考文献链接，可省略

示例：

```markdown
Akilarの糖果屋(akilar.top)是一个私人性质的博客{% referto '[1]','Akilarの糖果屋群聊简介'
%}，从各类教程至生活点滴，无话不谈。建群的目的是提供一个闲聊的场所。博客采用Hexo框架{% referto '[2]','Hexo中文文档'
%}，Butterfly主题{% referto '[3]','Butterfly 安装文档(一) 快速开始' %}

本项目参考了Volantis{% referto '[4]','hexo-theme-volantis 标签插件' %}的标签样式。引入`[tag].js`，并针对`butterfly`
主题修改了相应的`[tag].styl`。在此鸣谢`Volantis`主题众开发者。
主要参考内容包括各个volantis的内置标签插件文档{% referto '[5]','Volantis文档:内置标签插件' %}
Butterfly主题的各个衍生魔改{% referto '[6]','Butterfly 安装文档:标签外挂（Tag Plugins' %}{% referto '[7]'
,'小弋の生活馆全样式预览' %}{% referto '[8]','l-lin-font-awesome-animation' %}{% referto '[9]'
,'小康的butterfly主题使用文档' %}

{% referfrom '[1]','Akilarの糖果屋群聊简介','https://jq.qq.com/?_wv=1027&k=pGLB2C0N' %}
{% referfrom '[2]','Hexo中文文档','https://hexo.io/zh-cn/docs/' %}
{% referfrom '[3]','Butterfly 安装文档(一) 快速开始','https://butterfly.js.org/posts/21cfbf15/' %}
{% referfrom '[4]','hexo-theme-volantis 标签插件','https://volantis.js.org/v5/tag-plugins/' %}
{% referfrom '[5]','Volantis文档:内置标签插件','https://volantis.js.org/tag-plugins/' %}
{% referfrom '[6]','Butterfly 安装文档:标签外挂（Tag
Plugins','https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89' %}
{% referfrom '[7]','小弋の生活馆全样式预览','https://lovelijunyi.gitee.io/posts/c898.html' %}
{% referfrom '[8]','l-lin-font-awesome-animation','https://github.com/l-lin/font-awesome-animation' %}
{% referfrom '[9]','小康的butterfly主题使用文档','https://www.antmoe.com/posts/3b43914f/' %}
```

效果：

Akilarの糖果屋(akilar.top)是一个私人性质的博客{% referto '[1]','Akilarの糖果屋群聊简介'
%}，从各类教程至生活点滴，无话不谈。建群的目的是提供一个闲聊的场所。博客采用Hexo框架{% referto '[2]','Hexo中文文档'
%}，Butterfly主题{% referto '[3]','Butterfly 安装文档(一) 快速开始' %}

本项目参考了Volantis{% referto '[4]','hexo-theme-volantis 标签插件' %}的标签样式。引入`[tag].js`，并针对`butterfly`
主题修改了相应的`[tag].styl`。在此鸣谢`Volantis`主题众开发者。
主要参考内容包括各个volantis的内置标签插件文档{% referto '[5]','Volantis文档:内置标签插件' %}
Butterfly主题的各个衍生魔改{% referto '[6]','Butterfly 安装文档:标签外挂（Tag Plugins' %}{% referto '[7]'
,'小弋の生活馆全样式预览' %}{% referto '[8]','l-lin-font-awesome-animation' %}{% referto '[9]'
,'小康的butterfly主题使用文档' %}

{% referfrom '[1]','Akilarの糖果屋群聊简介','https://jq.qq.com/?_wv=1027&k=pGLB2C0N' %}
{% referfrom '[2]','Hexo中文文档','https://hexo.io/zh-cn/docs/' %}
{% referfrom '[3]','Butterfly 安装文档(一) 快速开始','https://butterfly.js.org/posts/21cfbf15/' %}
{% referfrom '[4]','hexo-theme-volantis 标签插件','https://volantis.js.org/v5/tag-plugins/' %}
{% referfrom '[5]','Volantis文档:内置标签插件','https://volantis.js.org/tag-plugins/' %}
{% referfrom '[6]','Butterfly 安装文档:标签外挂（Tag
Plugins','https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89' %}
{% referfrom '[7]','小弋の生活馆全样式预览','https://lovelijunyi.gitee.io/posts/c898.html' %}
{% referfrom '[8]','l-lin-font-awesome-animation','https://github.com/l-lin/font-awesome-animation' %}
{% referfrom '[9]','小康的butterfly主题使用文档','https://www.antmoe.com/posts/3b43914f/' %}

### PDF展示

语法：

```markdown
{% pdf 文件路径 %}
```

参数：

1. 文件路径: 可以是相对路径或者是在线链接

示例：

```markdown
# 1.本地文件:在md文件路径下创建一个同名文件夹，其内放pdf文件名为xxx.pdf的文件

{% pdf xxx.pdf %}

# 2.在线链接

{% pdf https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/pdf/小作文讲义.pdf %}
```

效果：

{% pdf /assets/pdf/love.pdf %}
{% pdf https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/pdf/小作文讲义.pdf %}

### 隐藏块

语法：

```markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}
```

参数：

1. content：要隐藏的内容
2. display：展示前按钮显示的文字（可选）
3. bg：按钮的背景颜色（可选）
4. color：按钮显示的文字的颜色（可选）

示例：

```markdown
{% hideBlock 点我预览, blue %}
这里有张图片：
<img src="https://s1.vika.cn/space/2022/10/30/b35fce448bc9404a8d65c3ce1e6e46eb" alt="image (1)" style="zoom:67%;" />
{% endhideBlock %}
```

效果：

{% hideBlock 点我预览, blue %}
这里有张图片：
<img src="https://imagecloud.zhaozeyu.top/2023/03/20/64187ee0ab113.jpg" alt="风景图" style="zoom:67%;" />
{% endhideBlock %}
