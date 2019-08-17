---
layout: post
title:  Welcome to Jekyll!
---

# Welcome

**Hello world**, this is my first Jekyll blog post.

I hope you like it!

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>

<div id="gitalk-container"></div>

<script type="text/javascript">
var gitalk = new Gitalk({
  clientID: 'e46f6dec7c07145c652c',
  clientSecret: 'd1a0b627f9b76d21bd3080d1777d0aa0ad55dd83',
  repo: 'hello-world',
  owner: 'muziapple',
  admin: ['muziapple'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: true  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container');
</script>
