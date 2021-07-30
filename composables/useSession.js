import { ref } from '@nuxtjs/composition-api';
import axios from 'axios'

export default function useSession() {
    const loading = ref(true);
    const session = ref(null);

    axios.get('/api/auth/session')
    .then(({ data }) => {
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
        session
    }
}