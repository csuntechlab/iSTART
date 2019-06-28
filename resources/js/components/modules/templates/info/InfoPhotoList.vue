<template>
    <ul class="photo-list">
      <li
        v-for="listItem in listItems" :key="listItem.text"
        class="photo-list__list-item"
        :class="'photo-list__list-item--' + listItems.indexOf(listItem)">
        {{listItem.text}}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'InfoPhotoList',
  props: ['listItems'],
  methods: {
    applyTest () {
      let nodeId = 'head'
      let getHeadTag = document.querySelector(nodeId)
      let style = document.createElement('style')
      getHeadTag.append(style)
      style.type = 'text/css'
      let cssRule = ''
      for (var i = 0; i < this.listItems.length; i++) {
        cssRule += `
        .photo-list__list-item--` + i.toString() + `:before {
          content: '';
          background-image: url(` + this.listItems[i].src + `);
          display: inline-block;
          height: 4rem;
          min-width: 4rem;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          margin-right: 1rem;
        }`
      }
      style.innerHTML = cssRule
      // if (!style) {
      //   style.id = nodeId;
      //   style.type = 'text/css'
      //   this.$el.appendChild(style)
      // }
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
