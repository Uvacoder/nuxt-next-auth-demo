<template>
  <div>
    <h1>Nuxt + NextAuth Integration</h1>
    <div v-for="provider in Object.values(providers)" :key="provider.id">
      <button @click="signIn(provider.id)">Sign in with {{ provider.name }}</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import { getProviders, signIn } from 'nuxt-next-auth';

export default defineComponent({
  middleware: 'guest',
  setup() {
    return {
      signIn
    }
  },
  async asyncData() {
    const providers = await getProviders()
    return {
      providers
    }
  }
})
</script>
