<template>
  <div class="container">
    <div class="all-blog-post" v-if="this.blog_posts.length > 0">
      <div class="search-wrapper">
        <input
          class="search-box"
          type="text"
          v-model="search"
          placeholder="Search Blog..."
        />

        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5833 17.4167C14.6334 17.4167 17.9167 14.1334 17.9167 10.0833C17.9167 6.03325 14.6334 2.75 10.5833 2.75C6.53325 2.75 3.25 6.03325 3.25 10.0833C3.25 14.1334 6.53325 17.4167 10.5833 17.4167Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.75 19.25L15.7625 15.2625"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <!-- end .search-wrapper -->
      <div
        class="blog-post-wrapper"
        v-for="(item, index) in filteredPost.slice(0, this.render_number)"
        :key="index"
      >
        <div class="blog-post-content">
          <div class="blog-post-count">
            <span>{{ index + 1 }}</span>
          </div>
          <!-- end .blog-post-count -->
          <div class="blog-post-text">
            <h3 class="blog-post-text__title">{{ item.title }}</h3>
            <p class="blog-post-text__body">
              {{ item.body }}
            </p>
          </div>
          <!-- end .blog-post-text -->
        </div>
        <!-- end .blog-post-content -->
      </div>
      <!-- end .blog-post-wrapper -->
      <button
        class="show-more-button"
        @click="showPost"
        v-if="this.blog_posts.length > 10"
      >
        Show More Post <span class="plus-btn">+</span>
      </button>
    </div>
    <!-- end .all-blog-post -->
    <div class="no-post" v-else><h3>Searching...</h3></div>
  </div>
  <!-- end .container -->
</template>

<script>
import axios from "axios";

export default {
  name: "AllBlogPosts",

  data() {
    return {
      blog_posts: [],
      render_number: 10,
      search: "",
    };
  },

  methods: {
    showPost: function () {
      this.render_number += 10;
    },
  },

  created: function () {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => (this.blog_posts = response.data));
  },

  computed: {
    filteredPost: function () {
      return this.blog_posts.filter((blog) => {
        return blog.title.match(this.search) || blog.body.match(this.search);
      });
    },
  },
};
</script>