<template>
  <div id="#app">
    <header class="container-l header">
      <router-link to="/" tag="div"><a class="logo">Donovan Roubos</a></router-link>
      <nav class="navigation">
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

  .logo {
    font-size: 21px;
    color: $black;
    font-weight: 400;
    text-decoration: none;
  }

  .navigation {
    text-align: right;

    a {
      color: $black;
      font-size: 18px;
      padding: 0px 16px;
      text-decoration: none;

      &.router-link-exact-active {
        text-decoration: underline;
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
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
