<template>
  <div class="row align-center case-preview">
    <div class="col-10 preview">
      <img :src="pathResolving('assets/images/cases/previews', `${image}`)">


    </div>
  </div>
</template>

<script>
import {pathResolving} from '@/mixins/pathResolving'

export default {
  props: {
    image: {
      type: String,
      required: true
    }
  },
  mixins: [pathResolving]
}
</script>

<style lang="scss" scoped>
.preview {
  background: $white;
  display: flex;
  justify-content: center;
  height: 100%;
  max-height: 800px;

  img {
    margin: 32px 80px;
    height: 100%;
    width: 100%;
    max-width: 800px;
    overflow: hidden;

    @include breakpoint(s) {
      margin: 16px 32px;
    }
  }
}
</style>
