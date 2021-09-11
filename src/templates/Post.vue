<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Retour</g-link>
    <div class="post-title">
      <h1>{{ $page.post.title }}</h1>
      <p class="post-tags" v-if="$page.post.tags.length > 0">
        <span class="link" v-for="tag in $page.post.tags" :key="tag">{{ tag }}</span>
      </p>
      <p class="post-date">
        {{ $page.post.date }} | {{ $page.post.timeToRead }} min environ
      </p>
    </div>
    <hr>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
    <div class="footer">
      <div class="author-wrapper">
        <img id="logo" src="../../static/Logo-Jagfx-2018BG.png" width="100" height="100" alt="JAGFx">
        <div class="author-content">
          <span class="author-name">Emmanuel SMITH</span>
          <small>Développeur full-stack</small>
          <span class="author-links">
            <a href="https://twitter.com/d_jagfx" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/JAGFx" title="Github"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/smithemm/" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="mailto:hey@emmanuel-smith.me" title="M'envoyer un email"><i class="fas fa-paper-plane"></i></a>
            <a href="https://emmanuel-smith.me" title="Site web"><i class="fas fa-globe-europe"></i></a>
          </span>
        </div>
      </div>
    </div>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "{{ $page.post.title }}",
        "url": "{{ currentUrl() }}",
        "datePublished": "{{ $page.post.date }}",
        "inLanguage": "fr-FR",
        "copyrightYear": "2021",
        "keywords": "{{ $page.post.tags.join(',') }}",
        "author": [{
          "@type": "Person",
          "name": "Emmanuel SMITH",
          "url": "https://emmanuel-smith.me",
          "email": "hey@emmanuel-smith.me"
        }],
        "articleBody": "{{ esp($page.post.content) }}"
      }
    </script>
  </Layout>
</template>

<script>
export default {
  name: 'Post',
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: 'description', content: this.$page.post.description },
        { name: 'tags', content: this.$page.post.tags },
        { name: "author", content: "Emmanuel SMITH <hey@emmanuel-smith.me>" }
      ],
    }
  },
  methods: {
    esp( d ){
      return d.replace( /(<([^>]+)>)/ig, '')
      .replace(/\t/g, '\\t')
              .replace(/\n/g, '\\n')
              .replace(/\f/g, '\\f')
              .replace(/\r/g, '\\r')
              .replace(/"/g, '\\"');
    },
    currentUrl(){
      return 'https://discover.emmanuel-smith.me' + this.$page.post.path;
    }
  }
};
</script>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    path
    description
    tags
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
  font-family: "ailerons";
  text-transform: lowercase;
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 4rem auto;
  font-weight: 500;
}

.post-tags span {
  margin: 0 .2rem;
  font-size: .8rem;
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

.post-content blockquote {
  margin: 0;
  padding: 1rem 1rem 1rem 3rem;
  font-style: italic;
}

.post-content blockquote > p {
  margin: 0;
}

body[data-theme="dark"] .post-content blockquote {
  border-left: solid 3px #fff;
  background: #ffffff11;
}

.post-content blockquote {
  border-left: solid 3px #000;
  background: #00000011;
}

.footer {
  text-align: center;
  font-size: 1em;
  padding: 5rem 0;
}

.footer #logo{
  border-radius: 5rem;
  overflow: hidden;
  margin: .3rem;
}

.author-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}

.author-content{
  margin: 1rem 1rem 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.author-content > small {
  margin-left: .3rem;
}

.author-name{
  font-family: "ailerons";
  text-transform: lowercase;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
}

.author-links {
  margin-top: 0.5rem;
}

.author-links > a {
  padding: .3rem;
}

</style>
