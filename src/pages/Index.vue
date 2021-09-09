<template>
  <Layout>
    <header class="header">
      <img id="logo" src="../../static/Logo-Jagfx-2018BG.png" width="100" height="100" alt="JAGFx">
      <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.siteDescription" />
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
import PostList from "@/components/PostList";
export default {
  components: {
    PostList,
  },
  metaInfo() {
    return {
      meta: [
        { name: "author", content: "Dan Vega" }
      ]
    }
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
  padding: 0.7em;
}

.header h1  {
  font-family: "mathilde";
  text-transform: lowercase;
  font-size: 7rem;
  line-height: 0.7em;
  margin: 1rem auto;
  font-weight: 500;
}

.header h2 {
  font-weight: 200;
  font-size: 1rem;
  line-height: 1rem;
}

.header #logo{
  border-radius: 5rem;
  overflow: hidden;
}
</style>
