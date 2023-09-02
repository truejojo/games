<script>
export default {
  name: "Link",
  props: {
    path: "",
  },
};
</script>

<template>
  <RouterLink :to="`/${path}`">
    <slot></slot>
  </RouterLink>
</template>
