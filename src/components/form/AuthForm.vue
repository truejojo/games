<script>
import { Form } from "vee-validate";

export default {
  name: "AuthForm",
  components: {
    Form,
  },
  props: {
    submitData: Function,
    validationSchema: Object,
    errors: Object,
  }
}
</script>

<template>
  <Form
      @submit="submitData"
      :validation-schema="validationSchema"
      v-slot="{ errors }"
      class="bg-color-dark py-5"
    >
    <slot></slot>
  </Form>
</template>

