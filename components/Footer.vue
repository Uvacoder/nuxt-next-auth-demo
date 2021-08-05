<template>
    <footer class="fotter">
        <hr />
        <ul class="navItems">
            <li class="navItem">
                <a href="https://github.com/wobsoriano/nuxt-next-auth">nuxt-next-auth GitHub</a>
            </li>
            <li class="navItem">
                <a href="https://next-auth.js.org">Next.js Documentation</a>
            </li>
            <li class="navItem">
                <a href="https://www.npmjs.com/package/nuxt-next-auth">NPM</a>
            </li>
            <li class="navItem">
                <a href="https://github.com/wobsoriano/nuxt-next-auth-demo">GitHub</a>
            </li>
            <li class="navItem">
                <nuxt-link to="/policy">Policy</nuxt-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {}
</script>

<style>
.footer {
  margin-top: 2rem;
}

.navItems {
  margin-bottom: 1rem;
  padding: 0;
  list-style: none;
}

.navItem {
  display: inline-block;
  margin-right: 1rem;
}
</style>