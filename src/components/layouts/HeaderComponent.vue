<template>
  <section id="header-section">
    <div class="container">
      <div class="naviagation-wrapper">
        <router-link class="logo" to="/home">Simple Blog</router-link>

        <nav class="navbar">
          <ul class="list">
            <li class="list-item">
              <router-link class="list-item-router" to="/home"
                >Home</router-link
              >
            </li>
            <li class="list-item">
              <router-link class="list-item-router" to="/add-new-blog"
                >Add New Blog</router-link
              >
            </li>

            <li class="list-item">
              <router-link class="list-item-router" to="/profile">
                Profile
              </router-link>
            </li>

            <li class="list-item">
              <router-link class="list-item-router" to="/all-user">
                All User
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <!-- end .navigation-wrapper -->
    </div>
    <!-- end end .container -->
  </section>
  <!-- end #header-section -->
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {
      search: "",
    };
  },

  // computed: {
  //   filterBlog: function () {
  //     return this.
  //   },
  // },
};
</script>

<style lang="scss" scoped>
</style>