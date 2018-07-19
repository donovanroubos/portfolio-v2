<template>
  <div class="container-l home">
    <IntroAnimation />

    <div class="row recent-work">
      <div class="col-5">
        <h1>Recent work</h1>
      </div>
      <div class="col-7">
        <p>Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. </p>
      </div>
    </div>

    <Case v-for="caseItem in recentCases"
      :title="caseItem.name"
      :type="caseItem.type"
      :year="caseItem.date.year"
      :preview="caseItem.preview"
      :link="`work/${caseItem.id}`"
      />
  </div>
</template>

<script>
import IntroAnimation from '@/components/IntroAnimation'
import Case from '@/components/Case'

export default {
  name: 'home',
  data: () => ({
    recentCases: []
  }),
  components: {
    IntroAnimation,
    Case
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.$set(this, 'recentCases', this.$globalData.content.cases)
    }
  }
}
</script>

<style lang="scss">
.home {
  .recent-work {
    margin: 0 0 168px 0;

    @include breakpoint(s) {
      margin: 0 0 64px 0;
    }
  }
}
</style>
