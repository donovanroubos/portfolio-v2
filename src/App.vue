<template>
  <div id="#app">
    <header class="container-l header">
      <router-link to="/" tag="div"><a class="logo">dr.</a></router-link>
      <div class="nav-mobile-toggler" @click="toggleMobileNav()">
        <div :class="['nav-icon', { active: mobileNavShow }]">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav :class="['navigation', { show: mobileNavShow }]">
          <router-link to="/work">Work</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/#contact">Contact</router-link>
      </nav>
    </header>

    <div class="container-l content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>

    <footer class="container-l footer">
      <div class="footer-wrap">
        <h1>{{ footer.footerText }} <a :href="footer.footerCtaLink">{{ footer.footerCta }} 👦🏻</a></h1>
        <div class="bottom">
          <span>{{ footer.copyRight }}</span>
          <div class="socials">
            <a v-for="social in footer.socials" :href="social.link">
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
  name: 'App',
  data: () => ({
    mobileNavShow: false,
    footer: {
      footerText: 'Do you have a good idea, question or something else?',
      footerCta: 'Contact me',
      footerCtaLink: 'mailto:hello@donovanroubos.nl',
      copyRight: 'Copyright © 2018 Donovan Roubos',
      socials: [
        {
          name: 'github',
          link: ''
        },
        {
          name: 'dribble',
          link: ''
        },
        {
          name: 'linkedin',
          link: ''
        }
      ]
    }
  }),
  components: {
    Icon
  },
  methods: {
    toggleBodyFixed() {
      const body = document.body

      if(this.mobileNavShow == true) {
        body.classList.add('fixed-scroll')
        window.scrollTo(0, 0)
      } else {
        body.classList.remove('fixed-scroll')

      }
    },
    toggleMobileNav() {
      this.mobileNavShow = !this.mobileNavShow

      this.toggleBodyFixed()
    }
  },
  watch: {
    '$route' () {
      this.$set(this, 'mobileNavShow', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 24px;
  margin-top: 56px;
  align-items: center;

  @include breakpoint(s) {
    margin-top: 32px;
  }

  .logo {
    font-size: 21px;
    color: $black;
    font-weight: 700;
    font-family: Open Sans;
    font-size: 32px;
    text-decoration: none;
    z-index: 51;
    position: relative;
  }

  .nav-mobile-toggler {
    display: none;
    width: 32px;
    height: 32px;
    transform: scaleX(-1);
    z-index: 51;

    @include breakpoint(s) {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .nav-icon {
        position: relative;
        width: 32px;
        height: 24px;
        cursor: pointer;

        span {
          position: absolute;
          width: 100%;
          height: 2px;
          opacity: 1;
          transition: .3s ease;
          background: $black;
          transform-origin: 0 1px;

          &:nth-child(1) {
            top: 0;
            left: 0;
            width: 100%;
          }

          &:nth-child(2) {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }

          &:nth-child(3) {
            bottom: 0;
            right: 0;
            width: 65%;
          }
        }

        &.active {

          span {
            &:nth-child(1) {
              transform: rotate(45deg);
              left: 4px;
            }

            &:nth-child(2) {
              opacity: 0;
            }

            &:nth-child(3) {
              transform: rotate(-45deg);
              width: 100%;
              right: -4px;
            }
          }
        }
      }
    }
  }

  .navigation {
    text-align: right;

    @include breakpoint(s) {
      position: absolute;
      width: 100%;
      height: 100vh;
      left: 100%;
      right: 0;
      top: 0;
      bottom: 0;
      background: #fff;
      z-index: 50;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all .6s cubic-bezier(0.19, 1, 0.22, 1);

      &.show {
        left: 0;
      }
    }

    a {
      color: $black;
      font-size: 18px;
      margin: 0px 16px;
      text-decoration: none;
      position: relative;

      &.router-link-exact-active {
        &::before {
          bottom: -4px;
          background: $black;
        }

        @include breakpoint(s) {
          &::before {
            bottom: 8px;
          }
        }
      }

      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        background: transparent;
        bottom: -16px;
        left: 0;
        right: 0;
        transition: all .6s cubic-bezier(0.075, 0.82, 0.165, 1);

        @include breakpoint(s) {
          bottom: 0px;
          height: 4px;
        }
      }

      @include breakpoint(s) {
        padding: 16px 0;
        font-size: 40px;
        font-weight: 600;
      }
    }
  }
}

.content {
  margin: 128px auto;
}

.footer {
  .footer-wrap {
    border-top: 1px solid $lighter-gray;

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
