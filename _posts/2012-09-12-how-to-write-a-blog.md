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
  clientID: 'c305c9be47bb4eacc711',
  clientSecret: '42c6ae49b86b3530db784b573e134d596a97609d',
  repo: 'hello-world',
  owner: 'muziapple',
  admin: ['muziapple'],
  id: 'hello-comment',      // Ensure uniqueness and length less than 50
  distractionFreeMode: true  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container');
</script>
