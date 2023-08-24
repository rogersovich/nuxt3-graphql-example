import {provideApolloClient} from '@vue/apollo-composable'

export default defineNuxtPlugin(() => {
  const apollo: any = useApollo().clients?.fakeAPI
  provideApolloClient(apollo)
})