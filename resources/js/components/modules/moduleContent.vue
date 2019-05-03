<template>
    <div class="row">
        <div class="module-content">
          <info-template></info-template>
        </div>
    </div>
</template>

<script>
import infoTemplate from './../modules/templates/infoTemplate'
export default {
  name: 'moduleContent',
  components: {
    infoTemplate
  }
}
</script>
