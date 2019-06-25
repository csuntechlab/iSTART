<template>
    <ul id="image-list">
        <li>Hi</li>
        <li>Hi</li>
        <li>Hi</li>
    </ul>
</template>

<script>
export default {
  methods: {
    applyTest () {
      let nodeId = 'list-list'
      let style = document.getElementById(nodeId)
      if (!style) {
        style = document.createElement('style')
        style.id = nodeId
        style.type = 'text/css'
        this.$el.appendChild(style)
      }
      let cssRule = `
                li:before { content: '';
                display: inline-block;
                height: 1.25rem;
                width: 1.25rem;
                background-image: url("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png");
                background-size: cover;`
      style.innerHTML = cssRule
    }
  },
  mounted: function () {
    this.applyTest()
  },
  beforeUpdate: function () {
    this.applyTest()
  }
}
</script>

<style>
    li {
        list-style: none;
    }
</style>
