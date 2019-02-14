<template>
  <h1>Hello {{ user.name }}!</h1>
</template>

<script>
export default {
    // https://github.com/nuxt-community/axios-module
    async asyncData({ app }) {
        const user = await app.$axios.$get('api/me');
        return { user };
    },
    head: {
        titleTemplate: 'FOOBAR'
    }
};
</script>