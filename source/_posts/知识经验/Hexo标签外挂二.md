---
title: Hexo标签外挂二
date: 2023-03-16 20:27:39
ai: 暂无预设简介，请点击下方AI实时简介按钮。
description: 主题Butterfly自带的标签外挂写法。
cover: https://imagecloud.zhaozeyu.top/2023/03/27/642171acd02cf.webp
background: url(https://imagecloud.zhaozeyu.top/2023/03/27/642171acd02cf.webp)
swiper_index: 3
categories:
  - 知识经验
tags:
  - Hexo
  - 标签外挂
---

### Button（按钮）

```markdown
这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋 %}
这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋,,outline %}
```

这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋 %}
这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋,,outline %}

### Block（）

```markdown
这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,block larger %}
这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,block center larger %}
这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,block right orange larger %}
```

这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,block larger %}
这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,block center larger %}
这是我的网站，请点击这个按钮进行跳转 {% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,block right orange larger %}

### Option

```markdown
<div class="btn-center">
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,blue larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,pink larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,red larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,purple larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,orange larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,green larger %}
</div>
```

<div class="btn-center">
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,blue larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,pink larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,red larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,purple larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,orange larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,green larger %}
</div>

```markdown
<div class="btn-center">
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline blue larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline pink larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline red larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline purple larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline orange larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline green larger %}
</div>
```

<div class="btn-center">
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline blue larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline pink larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline red larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline purple larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline orange larger %}
{% btn 'https://www.zhaozeyu.top',呓语の小屋,far fa-hand-point-right,outline green larger %}
</div>

### Note (Bootstrap Callout)

#### 方法一
##### simple

```markdown
{% note simple %}
默认 提示块标签
{% endnote %}

{% note default simple %}
default 提示块标签
{% endnote %}

{% note primary simple %}
primary 提示块标签
{% endnote %}

{% note success simple %}
success 提示块标签
{% endnote %}

{% note info simple %}
info 提示块标签
{% endnote %}

{% note warning simple %}
warning 提示块标签
{% endnote %}

{% note danger simple %}
danger 提示块标签
{% endnote %}
```

{% note simple %}
默认 提示块标签
{% endnote %}

{% note default simple %}
default 提示块标签
{% endnote %}

{% note primary simple %}
primary 提示块标签
{% endnote %}

{% note success simple %}
success 提示块标签
{% endnote %}

{% note info simple %}
info 提示块标签
{% endnote %}

{% note warning simple %}
warning 提示块标签
{% endnote %}

{% note danger simple %}
danger 提示块标签
{% endnote %}

##### modern

```markdown
{% note modern %}
默认 提示块标签
{% endnote %}

{% note default modern %}
default 提示块标签
{% endnote %}

{% note primary modern %}
primary 提示块标签
{% endnote %}

{% note success modern %}
success 提示块标签
{% endnote %}

{% note info modern %}
info 提示块标签
{% endnote %}

{% note warning modern %}
warning 提示块标签
{% endnote %}

{% note danger modern %}
danger 提示块标签
{% endnote %}
```

{% note modern %}
默认 提示块标签
{% endnote %}

{% note default modern %}
default 提示块标签
{% endnote %}

{% note primary modern %}
primary 提示块标签
{% endnote %}

{% note success modern %}
success 提示块标签
{% endnote %}

{% note info modern %}
info 提示块标签
{% endnote %}

{% note warning modern %}
warning 提示块标签
{% endnote %}

{% note danger modern %}
danger 提示块标签
{% endnote %}

##### flat

```markdown
{% note flat %}
默认 提示块标签
{% endnote %}

{% note default flat %}
default 提示块标签
{% endnote %}

{% note primary flat %}
primary 提示块标签
{% endnote %}

{% note success flat %}
success 提示块标签
{% endnote %}

{% note info flat %}
info 提示块标签
{% endnote %}

{% note warning flat %}
warning 提示块标签
{% endnote %}

{% note danger flat %}
danger 提示块标签
{% endnote %}
```

{% note flat %}
默认 提示块标签
{% endnote %}

{% note default flat %}
default 提示块标签
{% endnote %}

{% note primary flat %}
primary 提示块标签
{% endnote %}

{% note success flat %}
success 提示块标签
{% endnote %}

{% note info flat %}
info 提示块标签
{% endnote %}

{% note warning flat %}
warning 提示块标签
{% endnote %}

{% note danger flat %}
danger 提示块标签
{% endnote %}

##### disabled

```markdown
{% note disabled %}
默认 提示块标签
{% endnote %}

{% note default disabled %}
default 提示块标签
{% endnote %}

{% note primary disabled %}
primary 提示块标签
{% endnote %}

{% note success disabled %}
success 提示块标签
{% endnote %}

{% note info disabled %}
info 提示块标签
{% endnote %}

{% note warning disabled %}
warning 提示块标签
{% endnote %}

{% note danger disabled %}
danger 提示块标签
{% endnote %}
```

{% note disabled %}
默认 提示块标签
{% endnote %}

{% note default disabled %}
default 提示块标签
{% endnote %}

{% note primary disabled %}
primary 提示块标签
{% endnote %}

{% note success disabled %}
success 提示块标签
{% endnote %}

{% note info disabled %}
info 提示块标签
{% endnote %}

{% note warning disabled %}
warning 提示块标签
{% endnote %}

{% note danger disabled %}
danger 提示块标签
{% endnote %}

##### no-icon

```markdown
{% note no-icon %}
默认 提示块标签
{% endnote %}

{% note default no-icon %}
default 提示块标签
{% endnote %}

{% note primary no-icon %}
primary 提示块标签
{% endnote %}

{% note success no-icon %}
success 提示块标签
{% endnote %}

{% note info no-icon %}
info 提示块标签
{% endnote %}

{% note warning no-icon %}
warning 提示块标签
{% endnote %}

{% note danger no-icon %}
danger 提示块标签
{% endnote %}
```

{% note no-icon %}
默认 提示块标签
{% endnote %}

{% note default no-icon %}
default 提示块标签
{% endnote %}

{% note primary no-icon %}
primary 提示块标签
{% endnote %}

{% note success no-icon %}
success 提示块标签
{% endnote %}

{% note info no-icon %}
info 提示块标签
{% endnote %}

{% note warning no-icon %}
warning 提示块标签
{% endnote %}

{% note danger no-icon %}
danger 提示块标签
{% endnote %}

#### 方法二

##### simple

```markdown
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue 'fas fa-bullhorn' simple %}
2024年快到了....
{% endnote %}

{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}

{% note red 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}

{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple 'far fa-hand-scissors' simple %}
剪刀石头布
{% endnote %}

{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}
```

{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue 'fas fa-bullhorn' simple %}
2024年快到了....
{% endnote %}

{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}

{% note red 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}

{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple 'far fa-hand-scissors' simple %}
剪刀石头布
{% endnote %}

{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}

##### modern

```markdown
{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue 'fas fa-bullhorn' modern %}
2024年快到了....
{% endnote %}

{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}

{% note red 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}

{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple 'far fa-hand-scissors' modern %}
剪刀石头布
{% endnote %}

{% note green 'fab fa-internet-explorer' modern %}
前端最讨厌的浏览器
{% endnote %}
```

{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue 'fas fa-bullhorn' modern %}
2024年快到了....
{% endnote %}

{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}

{% note red 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}

{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple 'far fa-hand-scissors' modern %}
剪刀石头布
{% endnote %}

{% note green 'fab fa-internet-explorer' modern %}
前端最讨厌的浏览器
{% endnote %}

##### flat

```markdown
{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue 'fas fa-bullhorn' flat %}
2024年快到了....
{% endnote %}

{% note pink 'fas fa-car-crash' flat %}
小心开车 安全至上
{% endnote %}

{% note red 'fas fa-fan' flat%}
这是三片呢？还是四片？
{% endnote %}

{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple 'far fa-hand-scissors' flat %}
剪刀石头布
{% endnote %}

{% note green 'fab fa-internet-explorer' flat %}
前端最讨厌的浏览器
{% endnote %}
```

{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue 'fas fa-bullhorn' flat %}
2024年快到了....
{% endnote %}

{% note pink 'fas fa-car-crash' flat %}
小心开车 安全至上
{% endnote %}

{% note red 'fas fa-fan' flat%}
这是三片呢？还是四片？
{% endnote %}

{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple 'far fa-hand-scissors' flat %}
剪刀石头布
{% endnote %}

{% note green 'fab fa-internet-explorer' flat %}
前端最讨厌的浏览器
{% endnote %}

##### disabled

```markdown
{% note 'fab fa-cc-visa' disabled %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue 'fas fa-bullhorn' disabled %}
2024年快到了....
{% endnote %}

{% note pink 'fas fa-car-crash' disabled %}
小心开车 安全至上
{% endnote %}

{% note red 'fas fa-fan' disabled %}
这是三片呢？还是四片？
{% endnote %}

{% note orange 'fas fa-battery-half' disabled %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple 'far fa-hand-scissors' disabled %}
剪刀石头布
{% endnote %}

{% note green 'fab fa-internet-explorer' disabled %}
前端最讨厌的浏览器
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue 'fas fa-bullhorn' disabled %}
2024年快到了....
{% endnote %}

{% note pink 'fas fa-car-crash' disabled %}
小心开车 安全至上
{% endnote %}

{% note red 'fas fa-fan' disabled %}
这是三片呢？还是四片？
{% endnote %}

{% note orange 'fas fa-battery-half' disabled %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple 'far fa-hand-scissors' disabled %}
剪刀石头布
{% endnote %}

{% note green 'fab fa-internet-explorer' disabled %}
前端最讨厌的浏览器
{% endnote %}

##### no-icon

```markdown
{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue no-icon %}
2024年快到了....
{% endnote %}

{% note pink no-icon %}
小心开车 安全至上
{% endnote %}

{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}

{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple no-icon %}
剪刀石头布
{% endnote %}

{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}
```

{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note blue no-icon %}
2024年快到了....
{% endnote %}

{% note pink no-icon %}
小心开车 安全至上
{% endnote %}

{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}

{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}

{% note purple no-icon %}
剪刀石头布
{% endnote %}

{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}

### ！

待补充... ...

