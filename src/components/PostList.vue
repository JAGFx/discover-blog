<template>
  <div class="post-list">
    <hr class="line" />
    <p class="date" v-html="post.date" />
    <h3 class="title" v-html="post.title" />
    <p class="description" v-html="post.description" />
    <p class="tags" v-if="post.tags.length > 0">
      <span class="link" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
    </p>
    <b>{{ post.timeToRead }} min environ</b> &nbsp;
    <g-link :to="post.path" class="read">
      Lire
      <span class="visuallyhidden">environ {{ post.title }}</span></g-link
    >
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: ["post"]
};
</script>

<style>
.line {
  border: 0.5px solid #cdc8c5;
  margin: 30px 0;
}

.date {
  font-weight: 300;
}

.tags span {
  margin: 0 .2rem;
  font-size: .8rem;
}

.read {
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
  border: 2px dashed var(--border-color);
}

.visuallyhidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}
.visuallyhidden:focus {
  display: inline-block;
  padding: 15px 23px 14px;
  width: auto;
  height: auto;
  clip: auto;
  color: var(--text-color);
  background-color: var(--bkg-color);
  clip-path: unset;
}
</style>
