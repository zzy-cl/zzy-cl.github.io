---
title: 关于
date: 2023-03-10 16:15:29
aside: false
---

### 关于我

| KEY | VALUE         |
|-----|---------------|
| 姓名  | 赵泽宇           |
| 性别  | 男             |
| 学校  | 长沙理工大学        |
| 专业  | 计算机科学与技术      |
| 职称  | 找不到工作的大四摆烂生   |
| 性格  | ~~喜怒无常~~ 热情开朗 |
| 信仰  | 技术源于热爱，长于探索   |
| 现居地 | 湖南长沙          |

### 网站统计

<style>
    #statistic {
        font-size: 18px;
        padding: 20px;
        border: 2px var(--default-bg-color) solid;
        border-radius: 20px;
        width: 100%;
        color: var(--font-color);
        background-color: var(--card-bg);
    }

    div#statistic .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    div#statistic a {
        text-decoration: none;
    }

    #statistic .content div {
        display: inline-block;
    }

    #statistic div span {
        font-size: 16px;
        line-height: 1.3;
        display: block;
    }

    #statistic div .num {
        letter-spacing: 1px;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: .8rem;
        white-space: nowrap;
    }
</style>

<div id="statistic">
    <div class="content"></div>
    <span style="font-size:14px">流量统计支持：<a style="color:#1690ff;" href="https://v6.51.la/">51La</a></span>
</div>

<!-- js -->
<script>
    // 链接替换即可，不需要后面的参数
    fetch('https://v6-widget.51.la/v6/K0VU2LtXXe1Yu5jy/quote.js').then(res => res.text()).then((data) => {
        let title = ['最近活跃访客', '今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问', '总访问量']
        let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
        let order = [1, 2, 3, 4, 5, 0, 6] // 新增  可排序，如果需要隐藏则删除对应数字即可。
        // 示例：[1, 3, 2, 4, 5] 显示 ['今日人数', '昨日人数', '今日访问', '昨日访问', '本月访问']，不显示 最近活跃访客(0) 和 总访问量(6)
        for (let i = 0; i < order.length; i++) { document.querySelectorAll('#statistic .content')[0].innerHTML += '<div><span>' + title[order[i]] + '</span><span class="num">' + num[order[i]] + '</span></div>' }
    });
</script>

### 网站历程

{% timeline 时间线 %}

<!-- timeline 2023-03-31 优化速度 -->
1. 将css和js和字体文件全部替换成了elemecdn静态资源，提升速度。
2. 将暗夜模式的按钮背景改成了默认。
<!-- endtimeline -->

<!-- timeline 2023-03-30 优化速度 -->
调整首页轮播和分类卡片的样式，使圆角更加柔和，处理了分类卡片上下边距不一致的Bug。
<!-- endtimeline -->

<!-- timeline 2023-03-30 优化速度 -->
添加了`动态`首页顶部轮播功能。
<!-- endtimeline -->

<!-- timeline 2023-03-25 加载页面 -->
对加载页面进行了重构
参考：[Heo同款loading动画](https://anzhiy.cn/posts/52d8.html)
<!-- endtimeline -->

<!-- timeline 2023-03-24 对“图库”页面进行重构 -->
1. 在关于页面添加个人简介
2. 在关于页面添加 52La 统计
3. 在关于页面添加网站历程时间轴
<!-- endtimeline -->

<!-- timeline 2023-03-20 添加“关于”页面 -->
1. 在关于页面添加个人简介
2. 在关于页面添加 52La 统计
3. 在关于页面添加网站历程时间轴
<!-- endtimeline -->

{% endtimeline %}
