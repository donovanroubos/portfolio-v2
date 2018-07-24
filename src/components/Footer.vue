<template>
  <div>
  <footer class="container-l footer" id="contact">
    <div class="footer-wrap">
      <h1>{{ data.footerText }} <a :href="data.footerCtaLink">{{ data.footerCta }} 👦🏻</a></h1>
      <div class="bottom">
        <span>{{ data.copyRight }}</span>
        <div class="socials">
          <a v-for="social in data.socials" :href="social.link" target="_blank">
            <Icon :name="social.name" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.footer {
  .footer-wrap {
    border-top: 1px solid $lighter-gray;
    padding: 0 0 80px 0;

    @include breakpoint(m) {
      padding: 0 0 64px 0;
    }

    @include breakpoint(s) {
      padding: 0;
    }

    h1 {
      padding: 48px 0 88px 0;

      @include breakpoint(s) {
        padding: 24px 0 48px 0;
      }

      a {
        text-decoration: none;
        position: relative;
        display: inline-block;
        color: $black;

        &::after {
          content: '';
          width: 100%;
          height: 4px;
          background: $black;
          display: block;
          position: relative;
          bottom: 5px;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;

      @include breakpoint(s) {
        justify-content: center;
        flex-direction: column-reverse;
        align-items: center;
      }

      span {
        font-size: 18px;
        color: $lighter-gray;
        align-self: flex-end;

        @include breakpoint(s) {
          align-self: center;
          margin: 32px 0;
        }
      }

      .socials {
        display: flex;
        align-content: center;

        .icon {
          margin: 0 0 0 32px;

          @include breakpoint(s) {
            margin: 0 auto;
            padding: 0 16px;
          }
        }
      }
    }
  }
}
</style>
