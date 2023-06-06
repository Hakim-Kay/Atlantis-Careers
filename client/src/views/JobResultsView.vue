<template>
  <div class="job-results-view">
    <div class="job-results-view__sidebar">
      <job-filters-sidebar />
    </div>
    <div class="job-results-view__results">
      <JobResults />
    </div>
  </div>
</template>

<script>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSideBar/JobFiltersSidebar.vue'

export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar
  }
}
</script>
