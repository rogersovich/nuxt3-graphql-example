<script setup lang="ts">
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

const state = ref({
  email: undefined,
  password: undefined,
});

const form = ref();

async function submit() {
  await form.value!.validate();
  // Do something with state.value
  console.log(state.value);
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
