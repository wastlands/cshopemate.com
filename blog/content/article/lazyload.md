---
title: "加速 shopify 商店页面打开速度"
date: 2021-04-30T16:52:55+08:00
---
# 用延迟加载优化你的 shopify 商店主题

加速任何一个网页，都涉及到一系列技术手段。今天，我们只谈如何通过延迟加载图片技术，加速您的 shopify 商店页面的呈现速度。

> As the web has evolved, we have come to see huge increases in the number and size of assets sent to users.
> Between 2011 and 2019, the median resource weight increased from ~100KB to ~400KB for desktop and ~50KB to ~350KB for mobile. While Image size has increased from ~250KB to ~900KB on desktop and ~100KB to ~850KB on mobile.

## 浏览器原生支持的技术：loading="lazy"

![lazy-loading](../../images/lazy-loading-can-i-use.png)

## shopify 哪些页面或者模块需要优化图片加载？

### mega menu
终极菜单

## shopify 商店如何做延迟加载优化？
除了大家常使用的
```js
<img loading="lazy" src="abc.jpg" />

<img loading="lazy" data-src="abc.jpg" />
```


## 使用一点设计，美化图片加载
![dominent-colour](https://cdn.shopify.com/s/files/1/0533/2089/files/lazy-loading-dominent-colour.gif?v=1551809987)
![using-blur](https://cdn.shopify.com/s/files/1/0533/2089/files/lazy-loading-using-blur.gif?v=1551810062)
![loading-works](https://cdn.shopify.com/s/files/1/0533/2089/files/How-lazy-loading-works.gif?v=1551809833)
![other-options](https://cdn.shopify.com/s/files/1/0533/2089/files/lazy-loading-other-options.gif?v=1551810152)


参考：
1、[https://www.shopify.com/partners/blog/lazy-loading](https://www.shopify.com/partners/blog/lazy-loading)

2、[https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/](https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/)

3、[https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)


