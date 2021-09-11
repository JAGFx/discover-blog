<template>
  <Layout>
    <header class="header">
      <img id="logo" src="../../static/Logo-Jagfx-2018BG.png" width="100" height="100" alt="JAGFx">
      <h1 v-html="$page.metadata.siteName" />
      <h2>Développeur full-stack</h2>
      <div class="author-links">
        <a href="https://twitter.com/d_jagfx" title="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://github.com/JAGFx" title="Github"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/smithemm/" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="mailto:hey@emmanuel-smith.me" title="M'envoyer un email"><i class="fas fa-paper-plane"></i></a>
        <a href="https://emmanuel-smith.me" title="Site web"><i class="fas fa-globe-europe"></i></a>
      </div>
    </header>
    <section class="posts">
      <PostList
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          :post="edge.node"
      />
    </section>
  </Layout>
</template>

<script>
import PostList from '@/components/PostList';

export default {
  components: {
    PostList
  }
};
</script>

<page-query>
query {
metadata {
siteName
siteDescription
}
allPost {
totalCount
edges {
node {
id
title
tags
cover
timeToRead
description
date (format: "D MMMM YYYY")
path
}
}

}
}
</page-query>

<style>
.header {
  text-align: center;
  padding:    0.7em;
}

.header h1 {
  font-family:    "ailerons";
  text-transform: lowercase;
  font-size:      3.5rem;
  line-height:    3rem;
  margin:         2rem auto 1rem;
  font-weight:    500;
}

.header .author-links {
  margin-bottom: 2rem;
}

.header .author-links > a {
  font-size: 1.2rem;
  padding: .3rem;
}

.header h2 {
  font-weight: 200;
  font-size:   1rem;
  line-height: 1rem;
}

.header #logo {
  border-radius: 5rem;
  overflow:      hidden;
}
</style>
