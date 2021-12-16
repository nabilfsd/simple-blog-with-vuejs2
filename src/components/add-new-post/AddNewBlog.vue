<template>
  <section id="add-new-blog">
    <div class="container">
      <div class="form-wrapper" v-if="!isSubmitted">
        <form method="post">
          <div class="form-group">
            <label for="title" class="base-label">Title: </label>
            <input
              type="text"
              class="base-input"
              v-model="blog.title"
              placeholder="Enter Blog Title"
              required
            />
          </div>
          <!-- end .form-group -->

          <div class="form-group">
            <label for="body"> Description: </label>
            <textarea
              type="text"
              class="base-input blog-body"
              v-model="blog.body"
              placeholder="Enter Blog Description"
              required
            ></textarea>
          </div>
          <!-- end .form-group -->

          <button
            type="submit"
            class="submit-button"
            @click.prevent="submitBlog()"
          >
            Create Blog
          </button>
        </form>
      </div>
      <!-- end .form-wrapper -->

      <div class="create-new-blog-again-wrapper" v-else>
        <div class="create-new-blog-again">
          <h3>Data Inserted Successfull!</h3>
          <button
            class="create-new-blog-again__button"
            @click.prevent="createNewBlog"
          >
            Click Create An Other New Blog
          </button>
        </div>
        <!-- end .create-new-blog-again -->
      </div>
    </div>
    <!-- end .container -->
  </section>
  <!-- end #add-new-blog -->
</template>

<script>
import axios from "axios";

export default {
  name: "AddNewBlog",

  data() {
    return {
      isSubmitted: false,
      blog: {
        title: "",
        body: "",
      },
      allPosts: [],
    };
  },

  methods: {
    submitBlog: function () {
      if (this.blog.title != "" && this.blog.body != "") {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            userId: 2,
            id: this.allPosts.length + 1,
            title: this.blog.title,
            body: this.blog.body,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(`Errors: ${e}`);
          });
        this.isSubmitted = true;
        this.blog.title = "";
        this.blog.body = "";
      } else {
        alert("Please provide valid input");
      }
    },

    createNewBlog: function () {
      this.isSubmitted = false;
    },
  },

  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.allPosts = response.data;
    });
  },
};
</script>