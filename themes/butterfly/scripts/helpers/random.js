hexo.extend.generator.register('random', function (locals) {
    const config = hexo.config.random || {}
    const posts = []
    for (const post of locals.posts.data) {
        if (post.random !== false) posts.push(post.path)
    }
    return {
        path: config.path || 'zzy/random.js',
        data: `let posts=${JSON.stringify(posts)};function toRandomPost(){while(true){let pathName='/'+posts[Math.floor(Math.random() * posts.length)];if(location.pathname===pathName){continue;}else{pjax.loadUrl(pathName);return;}}};`
    }
})