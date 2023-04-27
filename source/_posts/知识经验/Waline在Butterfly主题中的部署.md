---
title: Waline在Butterfly主题中的部署
date: 2023-03-23 00:39:29
ai: 暂无预设简介，请点击下方AI实时简介按钮。
cover: https://imagecloud.zhaozeyu.top/2023/03/27/642171abdea7f.webp
background: url(https://imagecloud.zhaozeyu.top/2023/03/27/642171abdea7f.webp)
swiper_index: 5
categories:
  - 知识经验
tags:
  - Hexo
---

### LeanCloud 设置 (数据库)

国内版的LeanCloud需要绑定域名，所以我们直接选择国外版的[LeanCloud](https://console.leancloud.app/)

#### 登陆注册

1. 注册：点击这里进行[跳转](https://console.leancloud.app/register)
2. 注册成功后进入控制台，选择 `创建应用` 。
   ![image-20230323000046854](https://imagecloud.zhaozeyu.top/2023/03/23/641b262fe6f65.png)
3. 创建完成后进入应用，下拉找到 `设置` , 会有 `AppID ` 、`AppKey` 和 `MasterKey` 三个重要的数据，后续会用到。
   ![image-20230323000540955](https://imagecloud.zhaozeyu.top/2023/03/23/641b2755ef64c.png)

### 部署

1. 找到[这里](https://waline.js.org/guide/get-started/#vercel-%E9%83%A8%E7%BD%B2-%E6%9C%8D%E5%8A%A1%E7%AB%AF)，点击这个 `Deploy` 蓝色按钮。
2. 输入一个你喜欢的 Vercel 项目名称并点击 `Create` 继续:
   ![image-20230323001200465](https://imagecloud.zhaozeyu.top/2023/03/23/641b28d1d1811.png)
3. 当你看到这个页面的时候说明部署成功了！
   ![image-20230323001351060](https://imagecloud.zhaozeyu.top/2023/03/23/641b294021265.png)
4. 点击顶部的 Settings - Environment Variables 进入环境变量配置页，并配置三个环境变量 LEAN_ID, LEAN_KEY 和 LEAN_MASTER_KEY 。它们的值分别对应上一步在 LeanCloud 中获得的 APP ID, APP KEY, Master Key。当然，如果你需要设置邮箱通知，你还要添加额外的几个参数，如下图所示：
   ![image-20230323001809812](https://imagecloud.zhaozeyu.top/2023/03/23/641b2a42ee789.png)
5. 环境变量配置完成之后点击顶部的 Deployments 点击顶部最新的一次部署右侧的 Redeploy 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。
   ![image-20230323002127134](https://imagecloud.zhaozeyu.top/2023/03/23/641b2b084cfd5.png)
6. 重新部署完成后，点击顶部的 `Project` ，然后点击 `View Domains` 去绑定域名，注意到自己域名所在的服务平台进行DNS解析！
   ![image-20230323002833944](https://imagecloud.zhaozeyu.top/2023/03/23/641b2cb3170c7.png)

### 添加到 `Butterfly` 中

在 `_config.butterfly.yml` 中配置：

```yaml
comments:
  # 最多两个注释系统，第一个将显示为默认值
  # Choose: Disqus/Disqusjs/Livere/Gitalk/Valine/Waline/Utterances/Facebook Comments/Twikoo/Giscus/Remark42/Artalk
  use: Waline # Valine,Disqus
  text: true # 在按钮旁边显示注释名称
  # lazyload: 注释系统将在注释元素进入浏览器视口时加载。
  # 如果将其设置为true，则注释计数将无效
  lazyload: false
  count: true # 在文章的top_img中显示评论计数
  card_post_count: false # 在主页中显示评论计数

# waline - A simple comment system with backend support fork from Valine
# https://waline.js.org/
waline:
  serverURL: https://waline.zhaozeyu.top/ # 填写自己刚刚在 Vercel 中绑定的域名
  bg: # waline background
  pageview: false
  option:
    requiredMeta: [ nick, mail ] # 选定昵称和评论为必填项
    locale:
      placeholder: 昵称和邮箱为必填项，为了您能及时收到相关回复的邮件通知，请确保邮箱的正确性！ # 内容区提示
```

### 重启 Hexo

1. `hexo clean` --->  `hexo g` ---> `hexo d`
2. 大功告成！

