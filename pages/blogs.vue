<template>
  <div>
    <ClientOnly fallback-tag="div" fallback="Please wait...">
      <CharactersCard :characters="data.characters.results" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>

const query = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
        id
      }
    }
  }
`;
const variables = { page: 2 };

const { data } = await useAsyncQuery<BaseCharactersResponse>(query, variables);
</script>
