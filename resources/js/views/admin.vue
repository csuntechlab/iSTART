<template>
  <div>
    <h1>Admin</h1>
  </div>
</template>

<script>
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'
export default {
  name: 'Admin',
  mixins: [changeRouteTitle]
}
</script>
