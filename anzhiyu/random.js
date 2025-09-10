var posts=["2025/09/10/这是一篇新的文章/","2025/09/10/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };