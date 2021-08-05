<template>
    <div>
        <h1>Access Denied</h1>
        <p>
            <a href="/api/auth/signin" @click.prevent="$nextAuth.signIn">You must be signed in to view this page</a>
        </p>
    </div>
</template>

<script>
export default {}
</script>