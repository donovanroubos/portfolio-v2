<template>
  <div class="container-l work">
    <div class="row page-detail">
      <div class="col-5">
        <h1>{{ name }}</h1>
      </div>
      <div class="col-7">
        <p>{{ description }}</p>
      </div>
    </div>

    <Case v-for="caseItem in cases"
      :title="caseItem.name"
      :type="caseItem.type"
      :year="caseItem.date.year"
      :preview="caseItem.preview"
      :description="caseItem.description.firstHalf"
      :link="`${routePath}/${caseItem.id}`"
      />

  </div>
</template>

<script>
import Case from '@/components/Case'

export default {
  name: 'work',
  data: () => ({
    name: '',
    description: '',
    cases: [],
    routePath: ''
  }),
  components: {
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
      const pagesData = this.$globalData.content.pages
      const pageData  = pagesData.find(data => this.$route.name === data.id)

      const allCaseData = this.$globalData.content.cases

      this.$set(this, 'routePath', this.$route.path)

      if (pageData != undefined && allCaseData.length != 0) {
        this.$set(this, 'name', pageData.name)
        this.$set(this, 'description', pageData.description)
        this.$set(this, 'cases', allCaseData)
      } else if(this.$route.name == 'work') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss">
.work {
  .page-detail {
    margin: 168px auto;

    @include breakpoint(s) {
      margin: 64px auto;
    }
  }
}
</style>
