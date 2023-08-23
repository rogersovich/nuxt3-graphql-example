<script setup lang="ts">
const { character } = defineProps<{
  character: TCharactersResult;
}>();
</script>
<template>
  <UCard>
    <template #header>
      <div>#{{ character.id }}</div>
    </template>
    <div>
      {{ character.name }}
    </div>
  </UCard>
</template>

<style scoped></style>
