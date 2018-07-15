<template>
  <div class="container-l home">
    <IntroAnimation />

    <div class="row recent-work">
      <div class="col-5">
        <h1>Recent work</h1>
      </div>
      <div class="col-7">
        <p>Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. </p>
      </div>
    </div>

    <Case title="Blanko" type="Desktop app" year="2018" preview="blanko" />
    <Case title="Blanko" type="Desktop app" year="2018" preview="blanko" />
  </div>
</template>

<script>
import IntroAnimation from '@/components/IntroAnimation'
import Case from '@/components/Case'

export default {
  name: 'home',
  components: {
    IntroAnimation,
    Case
  }
}
</script>

<style lang="scss">
.home {
  .recent-work {
    margin: 0 0 168px 0;

    @include breakpoint(s) {
      margin: 0 0 64px 0;
    }
  }
}
</style>
