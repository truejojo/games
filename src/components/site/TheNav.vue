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
      await this.$store.dispatch("logOut")
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-light p-0">
    <div class="container-fluid bg-color-dark px-0">
      <LinkToPage className="navbar-brand" path="/">Logo</LinkToPage>
      <div class="d-flex">
        <ul class="nav">
          <NavItemLayout>
            <LinkToPage className="nav-link" path="/info">Info</LinkToPage>
          </NavItemLayout>
          <NavItemLayout>
            <LinkToPage v-if="!isUserLoggedIn" className="nav-link" path="/login">Login</LinkToPage>
            <button v-else class="btn btn-danger me-3" @click.prevent="logOut">logout</button>
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
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-center mt-3">
          <NavItemLayout>
            <LinkToPage className="nav-link" path="/buchstaben">
              Buchstaben
            </LinkToPage>
          </NavItemLayout>
          <NavItemLayout>
            <LinkToPage className="nav-link" path="/alphabet">
              Alphabet
            </LinkToPage>
          </NavItemLayout>
          <NavItemLayout>
            <LinkToPage className="nav-link" path="/zahlen">
              Zahlen
            </LinkToPage>
          </NavItemLayout>
          <NavItemLayout>
            <LinkToPage className="nav-link" path="/reihen">
              Reihen
            </LinkToPage>
          </NavItemLayout>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
