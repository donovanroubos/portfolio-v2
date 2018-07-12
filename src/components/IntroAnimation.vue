<template>
  <div class="intro-animation" :style="{height: `calc(100vh - ${this.headerHeight}px)` }">
    <div class="intro-container">
      <div class="line-numbers" :style="{height: `${this.messageHeight}px`}">
        01 02 03 04 05 06 07 08
      </div>
      <div class="message-container">
        <div class="message">
          Donovan — A passionate Frontend &#60;developer/&gt; who loves awesome <span>design</span>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroAnimation',
  data: () => ({
    headerHeight: 0,
    messageHeight: 0
  }),
  methods: {
    calcHeights() {
      this.$set(this, 'headerHeight', document.querySelector('.header').offsetHeight)
      this.$set(this, 'messageHeight', document.querySelector('.message').offsetHeight)
    }
  },
  mounted() {
    this.calcHeights()

    window.onresize = e => {
      this.calcHeights()
    }
  }
}
</script>

<style lang="scss" scoped>
.intro-animation {
  width: 100%;
  display: flex;
  align-items: center;

  .intro-container {
    position: relative;
    display: flex;

    .line-numbers {
      font-size: 48px;
      font-family: DroidSansMono, monospace;
      font-weight: 400;
      color: $lighter-gray;
      width: 58px;
      margin-right: 16px;
      display: inline-flex;
      flex-direction: column;
      line-height: 77px;
      overflow: hidden;
      flex-shrink: 0;

      @include breakpoint(0px, 920px) {
        font-size: 40px;
        line-height: 53px;
        margin-right: 4px;
        width: 52px;
      }

      @include breakpoint(xs) {
        font-size: 28px;
        width: 40px;
        line-height: 36px;
      }
    }

    .message-container {
      .message {
        font-weight: 600;
        font-size: 56px;
        line-height: 77px;
        margin: 0;
        color: $black;
        display: inline-block;
        max-width: 700px;

        @include breakpoint(0px, 920px) {
          font-size: 40px;
          line-height: 53px;
        }

        @include breakpoint(xs) {
          font-size: 28px;
          line-height: 36px;
        }

        span {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
