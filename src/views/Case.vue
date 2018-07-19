<template>
  <div class="container-l work">
    <div class="row page-detail">
      <div class="col-5">
        <h1>{{ caseItem.name }}</h1>
      </div>
      <div class="col-7">
        <p>{{ caseItem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work',
  data: () => ({
    caseItem: {}
  }),
  props: {
    caseName: {
      type: String,
      required: false
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      const casesData = this.$globalData.content.cases
      const caseData  = casesData.find(data => this.$route.params.caseName === data.id)

      if (caseData != undefined) {
        this.$set(this, 'caseItem', caseData)
      } else if(this.$route.name == 'work'){
        this.$router.push('/work')
      }
    }
  }
}
</script>

<style lang="scss">

</style>
