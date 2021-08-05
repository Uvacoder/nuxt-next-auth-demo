<template>
  <div>
    <h1>Server Side Rendering</h1>
      <p>
        This page uses the universal <strong>getSession()</strong> method in <strong>asyncData()</strong>.
      </p>
      <p>
        Using <strong>getSession()</strong> in <strong>asyncData()</strong> is the recommended approach if you need to
        support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to render.
      </p>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import { getSession } from 'nuxt-next-auth';

export default defineComponent({
    async asyncData() {
      const session = await getSession()
      return {
        session
      }
    }
})
</script>