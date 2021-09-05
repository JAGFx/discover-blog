<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{ $page.post.title }}</h1>
      <p class="post-date">
        {{ $page.post.date }} | {{ $page.post.timeToRead }} min read
      </p>
    </div>
    <hr>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.post-title {
  text-align: center;
}

.post-title h1 {
  font-family: "mathilde";
  text-transform: lowercase;
  font-size: 7rem;
  line-height: 0.7em;
  margin: 4rem auto;
  font-weight: 500;
}

.post-date {
  font-weight: 200;
  font-size: 1rem;
  line-height: 1rem;
  margin: 3rem auto;
}

.post-content {
  font-size: 20px;
}
</style>
