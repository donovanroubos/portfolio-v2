<template>
  <div class="case-links">
    <div class="row">
      <div class="col-6">
        <h2>Links</h2>
      </div>
      <div class="col-6">
        <div class="links">
          <a v-for="link in links" :href="link.url" target="_blank">{{ link.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.case-links {
  margin: 128px 0;

  @include breakpoint(s) {
    margin: 64px 0;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 16px;

    @include breakpoint(s) {
      padding: 0;
      flex-direction: row;
    }

    a {
      color: $black;
      font-size: 21px;
      line-height: 32px;

      @include breakpoint(s) {
        margin: 0 12px;

        &:first-child {
          margin: 0 12px 0 0;
        }
      }
    }
  }
}
</style>
