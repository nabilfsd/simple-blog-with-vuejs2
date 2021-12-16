<template>
  <section id="home-section">
    <AllBlogPosts></AllBlogPosts>
  </section>
</template>

<script>
import AllBlogPosts from "../components/home/AllBlogPost.vue";
export default {
  name: "Home",
  components: {
    AllBlogPosts,
  },
};
</script>
