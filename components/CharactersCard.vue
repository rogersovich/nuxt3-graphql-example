<script setup lang="ts">
const props = defineProps<{
  characters: TCharactersResult[];
}>();
</script>
<template>
  <div class="grid grid-cols-12 gap-4">
    <div
      class="col-span-4"
      v-for="character in props.characters"
      :key="character.id"
    >
      <CharacterCard :character="character" />
    </div>
  </div>
</template>

<style scoped></style>
