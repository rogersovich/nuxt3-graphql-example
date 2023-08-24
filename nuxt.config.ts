export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@nuxthq/ui"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://rickandmortyapi.com/graphql"
      },
      fakeAPI: {
        httpEndpoint: "https://api.escuelajs.co/graphql"
      },
      country: {
        httpEndpoint: "https://countries.trevorblades.com/graphql"
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
