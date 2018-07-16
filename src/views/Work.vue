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
    :year="caseItem.date"
    :preview="caseItem.preview"
    />

  </div>
</template>

<script>
import Case from '@/components/Case'

export default {
  name: 'work',
  data: () => ({
    name: null,
    description: null,
    cases: null
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
      const filteredPageData = pagesData.filter(x => x.name === this.$route.name)
      const pageData = filteredPageData[0]
      const allCaseData = this.$globalData.content.cases

      if (pagesData.length && allCaseData.length !== 0) {
        this.$set(this, 'name', pageData.name)
        this.$set(this, 'description', pageData.description)

        this.$set(this, 'cases', allCaseData)
      } else {
        console.log('Error')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss">
.work {
  .page-detail {
    margin: 168px 0 168px 0;
  }
}
</style>
