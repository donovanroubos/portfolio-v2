<template>
  <div class="container-l home">
    <IntroAnimation />

    <div class="row recent-work">
      <div class="col-12">
        <h1>{{ recentWorkTitle }}</h1>
      </div>
    </div>

    <Case v-for="caseItem in recentCases"
      :title="caseItem.name"
      :type="caseItem.type"
      :year="caseItem.date.year"
      :preview="caseItem.preview"
      :description="caseItem.description.firstHalf"
      :link="`work/${caseItem.id}`"
      />

    <div class="row about-me">
      <div class="col-5">
        <h1>{{ aboutMeTitle }}</h1>
      </div>
      <div class="col-7">
        <p>{{ aboutMeShortData }}</p>
        <Button label="Read more" link="about" />
      </div>
    </div>
  </div>
</template>

<script>
import IntroAnimation from '@/components/IntroAnimation'
import Case from '@/components/Case'
import Button from '@/components/Button'

export default {
  name: 'home',
  data: () => ({
    recentCases: [],
    recentWorkTitle: '',
    recentWorkShortData: '',
    aboutMeShortData: '',
    aboutMeTitle: ''
  }),
  components: {
    IntroAnimation,
    Case,
    Button
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      const pagesData = this.$globalData.content.pages
      const aboutMePage = pagesData.find(data => 'about' === data.id)
      const recentWorkPage = pagesData.find(data => 'work' === data.id)

      this.$set(this, 'aboutMeShortData', aboutMePage.content.introduction.description.firstHalf)
      this.$set(this, 'aboutMeTitle', aboutMePage.name)
      this.$set(this, 'recentWorkShortData', recentWorkPage.description)
      this.$set(this, 'recentWorkTitle', recentWorkPage.name)
      this.$set(this, 'recentCases', this.$globalData.content.cases)
    }
  }
}
</script>

<style lang="scss">
.home {
  .recent-work {
    margin: 0 0 64px 0;

    @include breakpoint(s) {
      margin: 0 0 24px 0;
    }
  }

  .about-me {
    margin: 40px 0 168px;

    @include breakpoint(s) {
      margin: 0 0 64px 0;
    }

    button {
      margin: 32px 0 0 0;

      @include breakpoint(s) {
        margin: 16px 0 0 0;
      }
    }
  }
}
</style>
