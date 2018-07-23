<template>
  <router-link tag="button" :to="link">
    {{ label }}
    <span class="arrow">→</span>
    <span class="line"></span>
  </router-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    link: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  font-size: 21px;
  font-weight: 500;
  color: $red;
  position: relative;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  background: 0;

  &:hover .arrow {
    animation: inMove 1s infinite 0s ease;
  }

  .arrow {
    margin: 0 0 0 4px;
    animation: outMove .5s ease;
  }
}

@keyframes outMove{
    0% {
      margin: 0 0 0 12px;
    }
    100% {
      margin: 0 0 0 4px;
    }
}

@keyframes inMove{
    0% {
      margin: 0 0 0 4px;
    }
    50% {
      margin: 0 0 0 12px;
    }
    100% {
      margin: 0 0 0 4px;
    }
}
</style>
