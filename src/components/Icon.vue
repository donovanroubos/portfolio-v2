<template>
<div :class="['icon', name, className]" :style="{
    width: `${width}px`,
    height: `${height}px`,
    }">
  <img :src="pathResolving('assets/images/icons', `${name}.svg`)" draggable="false">
</div>
</template>

<script>
import {pathResolving} from '@/mixins/pathResolving'

export default {
  name: 'Icon',
  props: {
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false
    }
  },
  mixins: [pathResolving]
}
</script>

<style lang="scss">
.icon {
  display: flex;
  align-items: center;
  background: inherit;
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    object-position: 100% 100%;
    background: inherit;
  }
}
</style>
