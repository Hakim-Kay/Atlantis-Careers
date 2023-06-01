<template>
  <main-nav />
  <hero-section />
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    MainNav: MainNav,
    HeroSection: HeroSection
  }
}
</script>
