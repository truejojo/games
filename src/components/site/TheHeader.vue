<script>
import ContainerLayout from "@/layouts/ContainerLayout.vue";
import TheNav from "./TheNav.vue";

export default {
  name: "TheHeader",
  components: {
    ContainerLayout,
    TheNav,
  },
};
</script>

<template>
  <header class="bg-color-dark py-3">
    <ContainerLayout>
      <TheNav />
    </ContainerLayout>
  </header>
</template>
