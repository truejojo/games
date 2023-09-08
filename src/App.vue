<script>
import TheHeader from "@/components/site/TheHeader.vue";
import TheFooter from "@/components/site/TheFooter.vue";
import ContainerLayout from "@/layouts/ContainerLayout.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    ContainerLayout,
  },
  mounted() {
    this.$store.dispatch("onAuthStateChangedUser")
  }
};
</script>

<template>
  <TheHeader />
  <main class="bg-color">
    <ContainerLayout>
      <RouterView></RouterView>
    </ContainerLayout>
  </main>
  <TheFooter />
</template>
