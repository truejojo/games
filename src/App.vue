<script>
import TheHeader from "@/components/site/TheHeader.vue";
import TheFooter from "@/components/site/TheFooter.vue";
import ContainerXLLayout from '@/layouts/ContainerXLLayout.vue';

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    ContainerXLLayout
  },
};
</script>

<template>
  <TheHeader />
  <main>
    <ContainerXLLayout>
      <RouterView />
    </ContainerXLLayout>    
  </main>
  <TheFooter />
</template>
