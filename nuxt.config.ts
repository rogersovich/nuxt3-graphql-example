// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@nuxthq/ui"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://rickandmortyapi.com/graphql",
      },
    },
  },
  imports: {
    dirs: ["composables/**", "types"],
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
