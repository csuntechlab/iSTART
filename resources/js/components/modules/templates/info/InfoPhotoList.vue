<template>
    <ul id="image-list">
        <li>Hi</li>
        <li>Hi</li>
        <li>{{title}}</li>
    </ul>
</template>

<script>
export default {
  name: 'InfoPhotoList',
  data () {
    return {
      title: 'hello',
      photoList: {
        // 0: {
        //   text: 'Eat before you drink.',
        //   image: 'images/alcoholModule/alcohol_s23_01.jpg',
        // },
        // 1: {
        //   text: 'Snack on Food.',
        //   image: 'images/alcoholModule/alcohol_s23_02.jpg',
        // },
        // 2: {
        //   text: 'Snack on Food.',
        //   emoji: '🧐',
        // },
        src: 'images/alcoholModule/alcohol_s23_01.jpg',
        emoji: '🍿'
      }
    }
  },
  methods: {
    applyTest () {
      let nodeId = 'head'
      let getHeadTag = document.querySelector(nodeId)
      console.log(getHeadTag)
      let style = document.createElement('style')
      getHeadTag.append(style)
      style.type = 'text/css'
      let cssRule = `
        li:before { content: '` + this.photoList.emoji + `';
        display: inline-block;
        height: 1.25rem;
        width: 1.25rem;
        background-size: cover;`
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
