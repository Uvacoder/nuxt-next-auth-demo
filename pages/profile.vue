<template>
    <div>
      <pre>{{ JSON.stringify(session, null, 2) }}</pre>
    <!-- <button @click="test">test</button> -->
    <button @click="signOut">sign out</button>
    </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { getSession, useSession, signOut } from '~/modules/next-auth/client';

export default defineComponent({
    middleware: 'auth',
    setup(_props, { root: { $store } }) {
        const session = computed(() => $store.state.session)
        const [session2, loading] = useSession()

        const test = async () => {
            console.log(session2.value)
            console.log(loading.value)
            const result = await getSession()
            console.log(result)
        }

        return {
            session,
            test,
            signOut
        }
    }
})
</script>