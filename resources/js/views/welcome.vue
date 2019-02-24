<template>
    <div class="container">
        <h1 class="text-center">Welcome to iSTART</h1>
        <button @click.prevent="logout">Logout</button>
    </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      document.cookie = 'userKey =; expires = Thu, 01 Jan 1970 00:00:01 GMT;'
      this.$router.push({ name: 'login' })
    }

  },
  components: {

  }

}
</script>
