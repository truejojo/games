<script>
export default {
  name: "HomePage",
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUser;
    },
    getUserName() {
      return this.$store.getters.userName;
    },
    getUserEmail() {
      return this.$store.getters.userEmail;
    },
    getUserId() {
      return this.$store.getters.userId;
    },
    getUserAccessToken() {
      return this.$store.getters.userAccessToken;
    },
    getUserExpirationTime() {
      return this.$store.getters.userExpirationTime;
    },
    getRemainingTime() {
      return this.$store.getters.getRemainingTime;
    },

  },
};
</script>

<template>
  <h1 v-if="!isUserLoggedIn" class="display-1">Moin</h1>
  <div v-else>
    <h1 class="display-1">Moin {{ getUserName }}</h1>
    <p class="mb-3">{{ getUserEmail }}</p>
    <hr />
    <p class="mb-3">{{ getUserId }}</p>
    <hr />
    <p class="mb-3">{{ getUserAccessToken }}</p>
    <hr />
    <p class="mb-3">{{ getUserExpirationTime }}</p>
    <p class="mb-3">{{ new Date(getUserExpirationTime) }}</p>
  </div>
</template>
