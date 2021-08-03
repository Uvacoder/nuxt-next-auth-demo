<template>
    <div>
      <pre>{{ JSON.stringify(session, null, 2) }}</pre>
      <button @click="$nextAuth.signOut">Sign out</button>
    </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
    middleware: 'auth',
    setup(_props, { root: { $store } }) {
        const session = computed(() => $store.state.auth.session)
        
        return {
            session
        }
    }
})
</script>