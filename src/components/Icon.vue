<template>
<div :class="['icon', name, className]" :style="{
    width: `${width}px`,
    height: `${height}px`,
    }">
  <img :src="iconsUrl(name)" draggable="false"/>
</div>
</template>

<script>
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
  methods: {
    iconsUrl(iconName) {
      return require(`@/assets/images/icons/${iconName}.svg`)
    }
  }
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
