<template>
  <div class="container-l work">

    <div class="row page-detail">
      <div class="col-12">
        <h1>{{ caseItem.name }} </h1>
        <div class="content">
          <p class="desktop">{{ caseItem.description.firstHalf }}</p>
          <p class="desktop">{{ caseItem.description.secondHalf }}</p>
          <p class="mobile">{{ caseItem.description.firstHalf + ' ' + caseItem.description.secondHalf }}</p>
        </div>
      </div>
    </div>

    <CaseLinks :links="caseItem.links" />

  </div>
</template>

<script>
import CaseLinks from '@/components/CaseLinks'

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
  components: {
    CaseLinks
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

<style lang="scss" scoped>
.page-detail {

  h1 {
    margin: 0 0 64px 0;

    @include breakpoint(s) {
      margin: 0 0 16px 0;
    }
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
</style>
