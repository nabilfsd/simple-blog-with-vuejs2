<template>
  <section id="all-user-section">
    <div class="container">
      <div class="all-user-wrapper" v-if="allUser.length > 0">
        <div class="all-user-wrapper__search-content">
          <input
            class="search-box"
            type="text"
            v-model="searchUser"
            placeholder="Search Here..."
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
        <!-- end .search-content -->

        <div class="all-user-wrapper__user-content" v-if="allUser.length > 0">
          <table class="table">
            <thead class="thead">
              <tr>
                <th><button @click.prevent="sortByName">Name</button></th>
                <th><button @click.prevent="sortByEmail">Email</button></th>
                <th>
                  <button @click.prevent="sortByWebsite">Website</button>
                </th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr v-for="(user, index) in filteredUser" :key="index">
                <td>{{ user.name }} <span v-if="user.id == 2">(me)</span></td>
                <td>{{ user.email }}</td>
                <td>{{ user.website }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end .user-contecnt -->
      </div>

      <div class="no-user" v-else>
        <h2>Searching...</h2>
      </div>
      <!-- end .all-user-wrapper -->
    </div>
    <!-- end .container -->
  </section>
  <!-- end #all-user-section -->
</template>

<script>
import axios from "axios";

export default {
  name: "AllUser",

  data() {
    return {
      sortByAsc: true,
      allUser: [],
      searchUser: "",
    };
  },

  methods: {
    sortByName() {
      if (this.sortByAsc) {
        this.allUser.sort((a, b) => (a.name > b.name ? 1 : -1));
        this.sortByAsc = !this.sortByAsc;
      } else {
        this.allUser.sort((b, a) => (b.name > a.name ? -1 : 1));
        this.sortByAsc = !this.sortByAsc;
      }
    },

    sortByEmail() {
      if (this.sortByAsc) {
        this.allUser.sort((a, b) => (a.email > b.email ? 1 : -1));
        this.sortByAsc = !this.sortByAsc;
      } else {
        this.allUser.sort((b, a) => (b.email > a.email ? -1 : 1));
        this.sortByAsc = !this.sortByAsc;
      }
    },

    sortByWebsite() {
      if (this.sortByAsc) {
        this.allUser.sort((a, b) => (a.website > b.website ? 1 : -1));
        this.sortByAsc = !this.sortByAsc;
      } else {
        this.allUser.sort((b, a) => (b.website > a.website ? -1 : 1));
        this.sortByAsc = !this.sortByAsc;
      }
    },
  },

  computed: {
    filteredUser: function () {
      return this.allUser.filter((user) => {
        return (
          user.name.match(this.searchUser) ||
          user.email.match(this.searchUser) ||
          user.website.match(this.searchUser)
        );
      });
    },

    // sortByName: function () {
    //   return this.allUser.sort(function (a, b) {
    //     return a.name > b.name;
    //   });
    // },
  },

  created() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.allUser = response.data;
      console.log(response.data);
    });
  },
};
</script>