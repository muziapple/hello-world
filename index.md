<h1>Hello</h1>
this is index.html file

<ul>
  {% for post in site.posts %}
    <li>
      <a href="abc{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
