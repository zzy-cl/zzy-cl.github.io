---
title: 清单
date: 2023-03-17 20:36:38
aside: false
---
<div id="todolist"></div>

<script>
    // 瀑布流函数，不用管
    function waterfall(t) { function e(t, e) { var n = window.getComputedStyle(e); return parseFloat(n["margin" + t]) || 0 } function n(t) { return t + "px" } function r(t) { return parseFloat(t.style.left) } function o(t) { return t.clientWidth } function l(t) { return function (t) { return parseFloat(t.style.top) }(t) + function (t) { return t.clientHeight }(t) + e("Bottom", t) } function i(t) { return r(t) + o(t) + e("Right", t) } function u(t) { t = t.sort((function (t, e) { return l(t) === l(e) ? r(e) - r(t) : l(e) - l(t) })) } function a(e) { o(t) != h && (e.target.removeEventListener(e.type, arguments.callee), waterfall(t)) } "string" == typeof t && (t = document.querySelector(t)); var s = [].map.call(t.children, (function (t) { return t.style.position = "absolute", t })); t.style.position = "relative"; var f = []; s.length && (s[0].style.top = "0px", s[0].style.left = n(e("Left", s[0])), f.push(s[0])); for (var p = 1; p < s.length; p++) { var c = s[p - 1], y = s[p]; if (!(i(c) + o(y) <= o(t))) break; y.style.top = c.style.top, y.style.left = n(i(c) + e("Left", y)), f.push(y) } for (; p < s.length; p++) { u(f); y = s[p]; var d = f.pop(); y.style.top = n(l(d) + e("Top", y)), y.style.left = n(r(d)), f.push(y) } u(f); var v = f[0]; t.style.height = n(l(v)); var h = o(t); window.addEventListener ? window.addEventListener("resize", a) : document.body.onresize = a }

    // 清单函数
    todolist();
    function todolist() {
        fetch('https://memos.zhaozeyu.top/api/memo?creatorId=1&tag=清单').then(res => res.json()).then(data => { // 注意替换链接和ID
            // 获取并处理数据
            data = data.data
            let box = document.getElementById('todolist')
            data.forEach(item => {
                // 处理数据
                let content = item.content
                let title = content.match(/\[(.*?)\]/g)[0].replace(/\[(.*?)\]/, '$1');
                // 去掉多余内容，替换清单内容
                content = content.replace(/#.*\s/g, '').replace(/(-\s\[\s\]\s)(.*)/g, `<li><i style="margin-right: 5px;" class="fa-regular fa-circle"></i>$2</li>`).replace(/(-\s\[x\]\s)(.*)/g, `<li class="achieve"><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>$2</li>`);
                // 渲染数据
                let div = document.createElement('div');
                div.className = 'list_item';
                div.innerHTML = `<h3>${title}</h3><ul>${content}</ul>`;
                box.appendChild(div);
            });
            waterfall('#todolist');
        }).catch()
    }
</script>
