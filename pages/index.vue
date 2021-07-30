<template>
  <div>
    <h1>Nuxt + NextAuth Integration</h1>
    <a href="/api/auth/signin">Sign In</a>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  middleware: 'guest',
})
</script>
