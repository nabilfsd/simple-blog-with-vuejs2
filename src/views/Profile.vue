<template>
  <section id="profile-section">
    <div class="container">
      <div class="profile-wrapper">
        <h2>Name: <span>Ervin Howell</span></h2>
        <p><strong>User Name:</strong> Antonette</p>
        <p><strong>Email:</strong> Shanna@melissa.tv</p>
        <p><strong>Website:</strong> anastasia.net</p>
      </div>
      <!-- end .profile-wrapper -->

      <div class="search-wrapper">
        <input
          class="search-box"
          type="text"
          v-model="searchUserPost"
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

      <div class="user-post-wrapper" v-if="user_posts.length > 0">
        <div
          class="user-blog"
          v-for="(post, index) in filterdPost"
          :key="index"
        >
          <div class="blog-post-content">
            <div class="blog-post-count">
              <span>{{ index + 1 }}</span>
            </div>
            <!-- end .blog-post-count -->
            <div class="blog-post-text">
              <h3 class="blog-post-text__title">{{ post.title }}</h3>
              <p class="blog-post-text__body">
                {{ post.body }}
              </p>
            </div>
            <!-- end .blog-post-text -->
          </div>
          <!-- end .blog-post-content -->
        </div>
        <!-- end .blog-post-wrapper -->
      </div>
      <!-- end .user-post-wrapper -->
      <div class="no-user-post" v-else>
        <h4>Searching...</h4>
      </div>
      <!-- edn .no-user-post -->
    </div>
    <!-- end .container -->
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",

  data() {
    return {
      searchUserPost: "",
      user_posts: [],
    };
  },

  created: function () {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=2")
      .then((response) => {
        this.user_posts = response.data;
        console.log(this.user_posts);
      });
  },

  computed: {
    filterdPost: function () {
      return this.user_posts.filter((post) => {
        return (
          post.title.match(this.searchUserPost) ||
          post.body.match(this.searchUserPost)
        );
      });
    },
  },
};
</script>