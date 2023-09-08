<script>
export default {
  name: "InputWithLabelLayout",
};
</script>

<template>
  <div class="form-group mb-2">
    <slot name="input-with-label"></slot>
    <slot name="error-message"></slot>
  </div>
</template>

<style></style>
