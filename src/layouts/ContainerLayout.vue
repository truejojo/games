<script>
export default {
  name: "ContainerLayout",
};
//  :key="$route.path"
</script>

<template>
  <div class="container">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
      appear
    >
      <slot></slot>
    </transition>
  </div>
</template>
