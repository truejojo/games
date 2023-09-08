<script>
import { Form } from "vee-validate";
import HeaderPage from "@/components/main/HeaderPage.vue";
import SmallContentLayout from '@/layouts/SmallContentLayout.vue';
import InputWithLabelLayout from "@/components/form/InputWithLabelLayout.vue";
import InputWithLabel from "@/components/form/InputWithLabel.vue";
import ErrorMessage from "@/components/form/ErrorMessage.vue";
import SubmitButton from "@/components/form/SubmitButton.vue";
import InfoLinkText from "@/components/form/InfoLinkText.vue";
import { registerSchema } from "@/helper/validate.js";

export default {
  name: "RegisterPage",
  components: {
    Form,
    HeaderPage,
    SmallContentLayout,
    InputWithLabelLayout,
    InputWithLabel,
    ErrorMessage,
    SubmitButton,
    InfoLinkText,
  },
  data() {
    return {
      registerSchema,
      error: "",
      isLoading: false,
    };
  },
  methods: {
    async submitData(values) {
      this.isLoading = true;
      this.error = "";

      try {
        await this.$store.dispatch("register", values);
        this.$router.push({ name: "Home" });
        this.isLoading = false;
      } catch (error) {
        this.error = error.message;
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="row">
    <HeaderPage> Register </HeaderPage>
    <Form
      @submit="submitData"
      :validation-schema="registerSchema"
      v-slot="{ errors }"
      class="bg-color-dark py-5"
      >
      <SmallContentLayout>
        <InputWithLabelLayout v-if="error">
          <template #error-message>
            <div class="alert alert-danger">
              {{ error }}
            </div>
          </template>
        </InputWithLabelLayout>

        <InputWithLabelLayout>
          <template #input-with-label>
            <InputWithLabel type="email" id="email">
              E-Mail-Adresse
            </InputWithLabel>
          </template>
          <template #error-message>
            <ErrorMessage v-if="errors.email">
              {{ errors.email }}
            </ErrorMessage>
          </template>
        </InputWithLabelLayout>

        <InputWithLabelLayout>
          <template #input-with-label>
            <InputWithLabel type="text" id="name"> Name </InputWithLabel>
          </template>
          <template #error-message>
            <ErrorMessage v-if="errors.name">
              {{ errors.name }}
            </ErrorMessage>
          </template>
        </InputWithLabelLayout>

        <InputWithLabelLayout>
          <template #input-with-label>
            <InputWithLabel type="password" id="password">
              Passwort
            </InputWithLabel>
          </template>
          <template #error-message>
            <ErrorMessage v-if="errors.password">
              {{ errors.password }}
            </ErrorMessage>
          </template>
        </InputWithLabelLayout>

        <InputWithLabelLayout>
          <template #input-with-label>
            <InputWithLabel type="password" id="confirmPassword">
              Passwort bestätigen
            </InputWithLabel>
          </template>
          <template #error-message>
            <ErrorMessage v-if="errors.confirmPassword">
              {{ errors.confirmPassword }}
            </ErrorMessage>
          </template>
        </InputWithLabelLayout>

        <InfoLinkText path="/login">
          <template #text>Schon einen Accout?</template>
          <template #label>Dann log Dich ein.</template>
        </InfoLinkText>

        <SubmitButton :isLoading="isLoading">
          <template #default>register</template>
        </SubmitButton>
      </SmallContentLayout>
    </Form>
  </div>
</template>
