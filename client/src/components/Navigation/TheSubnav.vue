<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon class="mr-3" :icon="['fas', 'search']" />
        <span class="font-semibold text-brand-green-1">1023</span> <span>jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSubnav',
  data() {
    return {
      onJobResultsPage: true
    }
  }
}
</script>
