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

    <div class="container-l">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
