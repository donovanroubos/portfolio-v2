<template>
  <div class="container-l work">
    <div class="row page-detail">
      <div class="col-5">
        <h1>{{ caseItem.name }}</h1>
      </div>
      <div class="col-7">
        <p>Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'case',
  data: () => ({
    caseItem: null
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
      const caseData = casesData.filter(x => x.id === this.caseName)

      if (caseData.length != 0) {
        this.loading = false
        const data = caseData[0]
        this.$set(this, 'caseItem', data)
      } else {
        console.log('Error')
        this.$router.push('/work')
      }
    }
  }
}
</script>

<style lang="scss">

</style>
