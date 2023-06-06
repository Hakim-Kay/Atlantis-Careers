<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>

<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
  // data() {
  //   return {
  //     job: {}
  //   }
  // },
  // methods: {
  //   async getJob() {
  //     const { data } = await this.$axios.get(`/jobs/${this.$route.params.id}`)
  //     this.job = data
  //   }
  // },
  // created() {
  //   this.getJob()
  // }
}
</script>
