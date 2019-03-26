<template>
  <div>
    <h1>Admin</h1>
    <progress-loader :sizeString="64" :shapeString="shape.line" :module_percentage="module_percentage"></progress-loader>
  </div>
</template>

<script>
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'
import progressLoader from './../components/progress/progressLoader'
export default {
  name: 'schedule',
  mixins: [changeRouteTitle],
  components: {
    progressLoader
  },
  data () {
    return {
      size: 50,
      shape: {
        circle: 'circle',
        line: 'line'
      },
      module_percentage: 0.24
    }
  }
}
</script>
