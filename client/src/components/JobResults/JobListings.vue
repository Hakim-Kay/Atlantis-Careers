<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing />
      <job-listing />
      <job-listing />
    </ol>
  </main>
</template>

<script>
// import axios from 'axios'

import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: { JobListing },
  data() {
    return {
      jobs: []
    }
  }

  // mounted is a lifecycle hook that runs after the component is mounted
  // async mounted() {
  //   const response = await axios.get('http://localhost:3000/jobs')
  //   this.jobs = response.data
  // }
}
</script>
