import { ref } from '@nuxtjs/composition-api';

export default function useSession() {
    const loading = ref(true);
    const session = ref(null);

    fetch('/api/auth/session')
    .then((res) => res.json())
    .then((data) => {
        if (!data || !Object.keys(data).length) {
            return
        }
        session.value = data
    })
    .finally(() => {
        loading.value = false
    });

    return {
        loading,
        session,
        signIn() {
            if (session.value) return
            location.href = '/api/auth/signin'
        },
        signOut() {
            if (!session.value) return
            location.href = '/api/auth/signout'
        }
    }
}