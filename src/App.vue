<template>
  <div>
    <transition>
      <header class="container-l header">
        <router-link to="/" tag="div"><a class="logo">Donovan Roubos</a></router-link>
        <nav class="navigation">
            <router-link to="/work">Work</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/#contact">Contact</router-link>
        </nav>
      </header>
      <router-view/>
    </transition>
  </div>
</template>

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
</style>
