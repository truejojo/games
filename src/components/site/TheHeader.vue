<script>
import ContainerXLLayout from "@/layouts/ContainerXLLayout.vue";
import Link from "@/components/main/Link.vue";

export default {
  name: "TheHeader",
  components: {
    ContainerXLLayout,
    Link,
  },
};
</script>

<template>
  <header class=" py-2">
    <ContainerXLLayout>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
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
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" href="info"
                  >Info</Link
                >
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" href="login"
                  >Login</Link
                >
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" path="games"
                  >Games</Link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </ContainerXLLayout>
  </header>
</template>
