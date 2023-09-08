<script>
export default {
  name: "SubmitButton",
  props: {
    isLoading: Boolean,
  },
};
</script>

<template>
  <button type="submit" class="btn btn-lg btn-outline-light mt-4">
    <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
    <span v-if="!isLoading"><slot></slot></span>
  </button>
</template>

<style>
</style>