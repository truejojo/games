<script>
import { Field } from "vee-validate";

export default {
  name: "InputWithLabel",
  components: {
    Field,
  },
  props: {
    type: "",
    id: "",
  },
};
</script>

<template>
  <label :for="id" class="fs-5"><slot></slot></label>
  <Field
    as="input"
    class="form-control"
    :type="type"
    :name="id"
    :id="id"
  />
</template>
