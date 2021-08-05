<template>
  <div>
    <AccessDenied v-if="!session" />
    <template v-else>
      <h1>Protected Page</h1>
      <p><strong>{{ content || "\u00a0" }}</strong></p>
    </template>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api';
import { useSession } from 'nuxt-next-auth';
import AccessDenied from '~/components/AccessDenied.vue';

export default defineComponent({
  components: { AccessDenied },
  setup() {
        const [session, loading] = useSession();
        const content = ref();

        onMounted(async() => {
          const res = await fetch('/api/protected');
          const json = await res.json();
          if (json.content) {
            content.value = json.content;
          }
        })

        return {
            session,
            loading,
            content
        }
    }
})
</script>