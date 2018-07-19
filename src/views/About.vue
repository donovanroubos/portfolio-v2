<template>
  <div class="container-l about">
    <div class="row">
        <div class="col-5">
          <h1>{{ name }}</h1>
        </div>
        <div class="col-7">
          <div class="pf-container">
            <img :src="pathResolving('assets/images', `${profilePicture}.png`)" alt="">
          </div>
        </div>
    </div>

    <div class="row introduction">
      <div class="col-12">
        <h2>{{ introduction.title }}</h2>
        <div class="content">
          <p class="desktop">{{ introduction.description.firstHalf }}</p>
          <p class="desktop">{{ introduction.description.secondHalf }}</p>
          <p class="mobile">{{ introduction.description.firstHalf + ' ' + introduction.description.secondHalf }}</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h2>{{ experience.title }}</h2>
      </div>
    </div>

    <Experience
      v-for="item in workExperienceItems"
      :type="item.type"
      :name="item.name"
      :role="item.role"
      :date="item.date"
      :title="item.role"
      :description="item.description"
      />

    <div class="row study">
      <div class="col-12">
        <h2>{{ study.title }}</h2>
      </div>
    </div>

    <Experience
      v-for="item in studyExperienceItems"
      :type="item.type"
      :role="item.role"
      :name="item.name"
      :date="item.date"
      :title="item.role"
      :description="item.description"
      />
  </div>
</template>

<script>
import Experience from '@/components/Experience'

import {pathResolving} from '@/mixins/pathResolving'

export default {
  name: 'about',
  mixins: [pathResolving],
  data: () => ({
    name: '',
    profilePicture: '',
    introduction: {},
    experience: {},
    study: {},
    workExperienceItems: [],
    studyExperienceItems: []
  }),
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      const pagesData = this.$globalData.content.pages
      const experienceItems = this.$globalData.content.experience
      const workExperienceItems = experienceItems.filter(data => data.type === 'work')
      const studyExperienceItems = experienceItems.filter(data => data.type === 'study')
      const pageData  = pagesData.find(data => this.$route.name === data.id)

      if (pageData != undefined) {
        this.$set(this, 'name', pageData.name)
        this.$set(this, 'profilePicture', pageData.profilePicture)
        this.$set(this, 'introduction', pageData.content.introduction)
        this.$set(this, 'experience', pageData.content.experience)
        this.$set(this, 'study', pageData.content.study)
        this.$set(this, 'workExperienceItems', workExperienceItems)
        this.$set(this, 'studyExperienceItems', studyExperienceItems)
      } else if(this.$route.name == 'about') {
        this.$router.push('/')
      }
    }
  },
  components: {
    Experience
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin: 168px auto 168px auto;

  @include breakpoint(s) {
    margin: 64px auto;
  }

  h1 {
    margin-bottom: 40px;
  }

  .pf-container {
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
      width: 100%;
    }
  }

  .introduction {
    margin: 112px auto;

    @include breakpoint(s) {
      margin: 80px auto;
    }

    .content {
      display: flex;
      justify-content: center;
      flex-direction: row;

      @include breakpoint(s) {
        flex-direction: column;
      }

      p {
        width: 50%;
        display: inline-block;

        &:nth-child(1) {
          padding: 0 16px 0 0;
        }

        &:nth-child(2) {
          padding: 0 0 0 16px;
        }

        &.mobile {
          display: none;

          @include breakpoint(s) {
            display: block;
          }
        }

        &.desktop {
          @include breakpoint(s) {
            display: none;
          }
        }

        @include breakpoint(s) {
          width: 100%;

          &:nth-child(1), &:nth-child(2) {
            padding: 0;
          }
        }
      }
    }
  }

  .study {
    margin: 40px 0 0 0;
  }
}
</style>
