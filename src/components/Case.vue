<template>
  <div class="row align-justify case">
    <div class="col-5 details">
      <h3>{{ title }}</h3>
      <p class="type">{{ type }}<span>{{ year }}</span></p>
      <p class="about">Cras posuere velit ac egestas sodales. Suspendisse in nunc sed nisi tincidunt accumsan.</p>
      <Button label="View case" :link="link" />
    </div>
    <div class="col-7 preview">
      <div class="preview-container">
        <img :src="pathResolving('assets/images/cases', `${preview}.png`)" :alt="preview">
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

import {pathResolving} from '@/mixins/pathResolving'

export default {
  name: 'case',
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false
    },
    year: {
      type: String,
      required: false
    },
    preview: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: false,
      default: '/work'
    }
  },
  mixins: [pathResolving],
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.case {
  margin: 0 0 128px 0;

  @include breakpoint(s) {
    margin: 0 0 64px 0;
  }

  .details {
    .type {
      color: $light-gray;
      margin: 0 0 32px 0;

      @include breakpoint(s) {
        margin: 0 0 8px 0;
      }

      span {
        font-size: 14px;
        display: inline-flex;
        align-content: center;
        align-items: center;
        position: relative;
        bottom: 4px;

        &::before {
          content: '';
          display: inline-block;
          position: relative;
          width: 16px;
          margin: 0 8px;
          background: $light-gray;
          height: 1px;
        }
      }
    }

    .about {
      padding: 0 64px 0 0;

      @include breakpoint(m) {
        padding: 0 32px 0 0;
      }

      @include breakpoint(s) {
        padding: 0;
      }
    }

    button {
      margin: 32px 0 0 0;

      @include breakpoint(s) {
        margin: 16px 0;
      }
    }
  }

  .preview {
    height: 100%;

    .preview-container {
      height: 100%;
      max-height: 400px;
      background: $white;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      padding: 40px 64px;

      @include breakpoint(m) {
          padding: 32px 48px;
      }

      @include breakpoint(s) {
        padding: 16px 24px;
        max-width: none;
      }

      img {
        height: 100%;
        width: 100%;
        max-width: 500px;
      }
    }
  }
}
</style>
