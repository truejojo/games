<script>
export default {
  name: "NavLink",
  props: {
    path: "",
    className: "",
  },
  // computed: {
  //   setClassName() {
  //     return this.className ? this.className : "nav-link";
  //   },
  // },
};
</script>

<template>
  <RouterLink :to="path" aria-current="page" :class="className">
    <slot></slot>
  </RouterLink>
</template>

<style>
</style>