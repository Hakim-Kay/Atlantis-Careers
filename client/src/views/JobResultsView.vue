<template>
  <div class="job-results-view">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSideBar/JobFiltersSidebar.vue'
import JobListings from '@/components/JobResults/JobListings.vue'

export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar,
    JobListings
  }
}
</script>
