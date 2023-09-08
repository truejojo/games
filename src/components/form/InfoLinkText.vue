<script>
import LinkToPage from "@/components/main/LinkToPage.vue";

export default {
  name: "InfoLinkText",
  components: {
    LinkToPage,
  },
  props: {
    path: String,
  },
};
</script>

<template>
  <p>
    <small class="text-info"
      ><slot name="text"></slot>
      <LinkToPage className="text-danger ps-2" :path="path"
        ><slot name="label"></slot></LinkToPage
    ></small>
  </p>
</template>

<style></style>
