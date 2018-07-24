<template>
  <div id="#app">

    <Header />

    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <Footer :data="footer" />

  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
          name: 'dribbble',
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
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 128px auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
