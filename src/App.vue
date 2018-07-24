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
    footer: {}
  }),
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const footerData = this.$globalData.content.footer

      if(footerData != undefined) {
        this.$set(this, 'footer', footerData)
      } else {
        console.log('Error')
      }
    }
  },
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
