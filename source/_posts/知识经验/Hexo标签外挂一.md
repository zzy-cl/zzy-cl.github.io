---
title: Hexo标签外挂一
date: 2023-03-16 20:18:42
ai: 暂无预设简介，请点击下方AI实时简介按钮。
description: Hexo官方的自带的外挂标签写法。
cover: https://imagecloud.zhaozeyu.top/2023/03/27/642171aa74dd8.webp
background: url(https://imagecloud.zhaozeyu.top/2023/03/27/642171aa74dd8.webp)
swiper_index: 2
categories:
  - 知识经验
tags:
  - Hexo
  - 标签外挂
---

>标签插件和 Front-matter 中的标签不同，它们是用于在文章中快速插入特定内容的插件。
>
>虽然你可以使用任何格式书写你的文章，但是标签插件永远可用，且语法也都是一致的。
>
>标签插件不应该被包裹在 Markdown 语法中，例如： []({% post_path lorem-ipsum %}) 是不被支持的。

### 引用块

在文章中插入引言，可包含作者、来源和标题。

**别号：** quote

```markdown
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

#### 示例

##### 没有提供参数，则只输出普通的 blockquote

```markdown
{% blockquote %}
飞流直下三千尺，疑是银河落九天。
{% endblockquote %}
```

{% blockquote %}
飞流直下三千尺，疑是银河落九天。
{% endblockquote %}

##### 引用书上的句子

```markdown
{% blockquote 大卫·利维坦, Wide Awake %}
不要只为自己寻求幸福,为所有人寻求幸福,通过善意,通过怜悯。
{% endblockquote %}
```

{% blockquote 大卫·利维坦, Wide Awake %}
不要只为自己寻求幸福,为所有人寻求幸福,通过善意,通过怜悯。
{% endblockquote %}

##### 引用 Twitter

```markdown
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
新功能：DevDocs现在提供了语法高亮显示功能。 https://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
新功能：DevDocs现在提供了语法高亮显示功能。 https://devdocs.io
{% endblockquote %}

##### 引用网络上的文章

```markdown
{% blockquote Seth Godin https://seths.blog/2009/07/welcome-to-island-marketing/ Welcome to Island Marketing %}
If you run a business on a small island, every interaction matters and every customer is precious.
{% endblockquote %}
```

{% blockquote Seth Godin https://seths.blog/2009/07/welcome-to-island-marketing/ Welcome to Island Marketing %}
If you run a business on a small island, every interaction matters and every customer is precious.
{% endblockquote %}

### Pull Quote（重要引述）

在文章中插入 Pull quote。

```markdown
{% pullquote [class] %}
李花花出家啦
{% endpullquote %}
```

{% pullquote %}
李花花出家啦
{% endpullquote %}

### jsFiddle

在文章中嵌入 [jsFiddle](https://jsfiddle.net/)。

```markdown
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

### Gist

在文章中嵌入 Gist。

```markdown
{% gist gist_id [filename] %}
```

### iframe

在文章中插入 iframe。

```markdown
{% iframe url [width] [height] %}
```

{% iframe https://www.zhaozeyu.top 340 200 %}

### Image

在文章中插入指定大小的图片。

```markdown
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```
{% img  https://imagecloud.zhaozeyu.top/2023/03/10/640b1dffc2c8e.jpg 400 250 '"本文章背景图" "文章背景图"' %}

### Link

在文章中插入链接，并自动给外部链接添加 target="_blank" 属性。

```markdown
{% link text url [external] [title] %}
```

{% link 欢迎来的我的博客网站 https://www.zhaozeyu.top 呓语の小屋 %}

### Youtube

在文章中插入 Youtube 视频。

```markdown
{% youtube video_id [type] [cookie] %}
```

#### 示例

##### 视频

```markdown
{% youtube ndLOF9jJnR4 %}
```

{% youtube ndLOF9jJnR4 %}

##### 播放列表

````markdown
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}
````

{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}

##### 隐私模式

在这种模式下，禁用 YouTube cookie

```markdown
{% youtube ndLOF9jJnR4 false %}
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}
```

{% youtube ndLOF9jJnR4 false %}
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}

### 引用文章

引用其他文章的链接。

```markdown
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

在使用此标签时可以忽略文章文件所在的路径或者文章的永久链接信息、如语言、日期。

例如，在文章中使用 `{% post_link how-to-bake-a-cake %}` 时，只需有一个名为 `how-to-bake-a-cake.md` 的文章文件即可。即使这个文件位于站点文件夹的 `source/posts/2015-02-my-family-holiday` 目录下、或者文章的永久链接是 `2018/en/how-to-bake-a-cake`，都没有影响。

默认链接文字是文章的标题，你也可以自定义要显示的文本。

默认对文章的标题和自定义标题里的特殊字符进行转义。可以使用`escape`选项，禁止对特殊字符进行转义。

#### 链接使用文章的标题

```markdown
{% post_link 前端学习路线 %}
```

[//]: # ({% post_link 前端学习路线 %})

#### 链接使用自定义文字

```markdown
{% post_link 前端学习路线 '通往文章的链接' %}
```

[//]: # ({% post_link https://www.zhaozeyu.top/e1894ebfa572/ 前端学习路线 %})

### 引用资源

引用文章的资源，与 资源文件夹 一起使用。

```markdown
{% asset_path filename %}
{% asset_img [class names] slug [width] [height] [title text [alt text]] %}
{% asset_link filename [title] [escape] %}
```

### 嵌入图片

hexo-renderer-marked 3.1.0+ 可以（可选）自动解析图片的文章路径，参考 本节 如何启用它。

“foo.jpg” 位于 `http://example.com/2023/03/16/hello/foo.jpg`。

#### 默认（无选项）

```markdown
{% asset_img foo.jpg %}
```

```markdown
<img src="/2023/03/16/hello/foo.jpg">
```

#### 自定义 class 属性

```markdown
{% asset_img post-image foo.jpg %}
```

```markdown
<img src="/2023/03/16/hello/foo.jpg" class="post-image">
```

#### 展示尺寸

```markdown
{% asset_img foo.jpg 500 400 %}
```

```markdown
<img src="/2023/03/16/hello/foo.jpg" width="500" height="400">
```

#### title 和 alt 属性

```markdown
{% asset_img logo.svg "lorem ipsum'dolor'" %}
```

```markdown
<img src="/2020/01/02/hello/foo.jpg" title="lorem ipsum" alt="dolor">
```
### Raw

如果您想在文章中插入 Swig 标签，可以尝试使用 Raw 标签，以免发生解析异常。

```markdown
{% raw %}
content
{% endraw %}
```

{% raw %}
content
{% endraw %}

### 文章摘要和截断

在文章中使用 `<!-- more -->`，那么 `<!-- more -->` 之前的文字将会被视为摘要。首页中将只出现这部分文字，同时这部分文字也会出现在正文之中。

例如：

```markdown
对他来说，照顾他将是痛苦的，但他将同时承受他的劳动和巨大的痛苦。
<!-- more -->
因为当我退一步说的时候，谁是我们的军队，除了他们中的任何一个人都能帮忙之外，什么都不干。这就像头痛、头痛、心脏病发作或心脏病发作。除非他们被杀，否则他们不会被抛弃；他们与那些离职的人一样是错误的，他们将失去灵魂。
```

首页中将只会出现：

对他来说，照顾他将是痛苦的，但他将同时承受他的劳动和巨大的痛苦。

正文中则会出现：

对他来说，照顾他将是痛苦的，但他将同时承受他的劳动和巨大的痛苦。
因为当我退一步说的时候，谁是我们的军队，除了他们中的任何一个人都能帮忙之外，什么都不干。这就像头痛、头痛、心脏病发作或心脏病发作。除非他们被杀，否则他们不会被抛弃；他们与那些离职的人一样是错误的，他们将失去灵魂。

注意，摘要可能会被 Front Matter 中的 excerpt 覆盖。
