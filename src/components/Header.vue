<template>
  <div>
    <header class="container-l header">
      <router-link to="/" tag="div"><a class="logo">Donovan.</a></router-link>
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
          <a href="#contact" @click="closeMobileNav">Contact</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data: () => ({
    mobileNavShow: false,
  }),
  watch: {
    '$route' () {
      this.closeMobileNav()
    }
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
    },
    closeMobileNav() {
      this.$set(this, 'mobileNavShow', false)
      this.toggleBodyFixed()
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
  padding-top: 56px;
  align-items: center;

  @include breakpoint(s) {
    padding-top: 32px;
  }

  .logo {
    font-size: 21px;
    color: $black;
    font-weight: 700;
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
      position: fixed;
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

      &:hover {
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

</style>
