<script>
import NavItemLayout from "./NavItemLayout.vue";
import LinkToPage from "@/components/main/LinkToPage.vue";

export default {
  name: "TheNav",
  components: {
    NavItemLayout,
    LinkToPage,
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUser;
    },
  },
  methods: {
    async logOut() {
      await this.$store.dispatch("logOut");
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light p-0">
    <div class="container-fluid justify-content-start bg-color-dark px-0">
      <LinkToPage className="navbar-brand flex-grow-1 me-auto" path="/"
        >Logo</LinkToPage
      >
      <ul class="nav">
        <NavItemLayout class="">
          <LinkToPage v-if="!isUserLoggedIn" className="nav-link" path="/login"
            >Login
          </LinkToPage>
          <button v-else class="btn btn-danger me-3" @click.prevent="logOut">
            logout
          </button>
        </NavItemLayout>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-shrink-1 flex-grow-0" id="navbarNav">
        <ul class="navbar-nav text-center">
          <NavItemLayout>
            <LinkToPage className="nav-link" path="/info">Info</LinkToPage>
          </NavItemLayout>
          <NavItemLayout>
            <LinkToPage className="nav-link" path="/games">Games</LinkToPage>
          </NavItemLayout>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
