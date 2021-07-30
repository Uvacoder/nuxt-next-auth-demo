<template>
    <div>
      <pre>{{ JSON.stringify(session, null, 2) }}</pre>
        <a href="/api/auth/signout">Sign Out</a>
    </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    middleware: 'authenticated',
    setup(_props, { root: { $store } }) {
        const session = computed(() => $store.state.session)

        return {
            session
        }
    }
})
</script>