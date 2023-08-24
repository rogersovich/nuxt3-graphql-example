<script setup lang="ts">
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(3, "Must be at least 8 characters"),
});

const state = ref({
  email: "john@mail.com",
  password: "changeme",
});

const form = ref();

const queryLogin = gql`
  mutation handleLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

async function submit() {
  await form.value!.validate();
  // Do something with state.value
  const formData = state.value;
  const { mutate: loginMutate } = useMutation(queryLogin, { formData });
  try {
    const { data } = await loginMutate(formData);
    console.log(data);
  } catch (error:any) {
    console.log(error.message);
  }
}
</script>

<template>
  <div class="max-w-[400px] mx-auto">
    <UForm ref="form" :schema="schema" :state="state" @submit.prevent="submit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="Email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput
          v-model="state.password"
          type="password"
          placeholder="Password"
        />
      </UFormGroup>

      <div class="flex items-center justify-between">
        <UButton
          color="orange"
          size="md"
          variant="ghost"
          class="text-[16px]"
          to="/blogs"
        >
          Blogs
        </UButton>
        <UButton type="submit" color="orange" size="md" class="text-[16px]">
          Submit
        </UButton>
      </div>
    </UForm>
  </div>
</template>
