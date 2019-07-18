<template>
    <ul class="photo-list">
      <li
        v-for="listItem in listItems" :key="listItem.text"
        class="photo-list__list-item"
        :class="[
          ('photo-list__list-item--' + listItems.indexOf(listItem)),
          (listItem.warning ? 'photo-list__list-item--red-text' : '')
        ]">
        {{listItem.text}}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'InfoPhotoList',
  props: ['listItems'],
  methods: {
    applyCSSForInfoList () {
      let nodeId = 'head'
      let getHeadTag = document.querySelector(nodeId)
      let style = document.createElement('style')
      getHeadTag.append(style)
      style.type = 'text/css'
      let cssImageRule = ''
      let cssDependentRule = ''
      let getPhotoList = this.listItems
      for (var i = 0; i < getPhotoList.length; i++) {
        cssDependentRule +=
          `.photo-list__list-item--` + i.toString() + `:before {
            background-image: url(` + getPhotoList[i].src + `);
          }`
        if ((getPhotoList.length - 1) === i) {
          cssImageRule += `
            .photo-list__list-item--` + i.toString() + `:before {
              content: '';
              display: inline-block;
              height: 4rem;
              min-width: 4rem;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              margin-right: 1rem;
            }`
        } else {
          cssImageRule += `
            .photo-list__list-item--` + i.toString() + `:before,`
        }
      }
      style.innerHTML = cssImageRule + cssDependentRule
    }
  },
  mounted: function () {
    this.applyCSSForInfoList()
  },
  beforeUpdate: function () {
    this.applyCSSForInfoList()
  }
}
</script>

<style>
  .red-text{
    color: red;
  }
</style>
