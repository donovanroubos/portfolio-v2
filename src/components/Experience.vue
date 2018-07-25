<template>
  <div class="row align-justify experience">
    <div class="col-5">
      <h3>{{ name }}</h3>
      <div class="role" v-if="role">
        {{ role }}
      </div>
      <div class="date" v-if="date">
        {{ date.from + ' - ' + date.untill }}
      </div>
    </div>
    <div class="col-7">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'experience',
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: Object,
      required: false
    },
    role: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">

.experience {
  &:not(:last-child) {
    margin: 0 0 80px 0;

    @include breakpoint(s) {
      margin: 0 0 40px 0;
    }
  }

  .role {
    font-size: 24px;
    color: $light-gray;
    margin: 0 0 8px 0;
  }

  .date {
    font-size: 21px;
    color: $light-gray;
  }

  p {
    @include breakpoint(s) {
      margin: 16px 0 0 0;
    }
  }
}
</style>
