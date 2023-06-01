<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Atlantis</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList'

export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      indexOf: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLocaleLowerCase()]: true // [learn: true] or [build: true] or [teach: true]
      }
    }
  },
  created() {
    this.changeTitle()
  },
  // lifecycle hook //
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Learn', 'Teach', 'Grow']
        this.action = nextElementInList(actions, this.action)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #f59e0b;
}
.learn {
  color: #10b981;
}
.teach {
  color: #3b82f6;
}
.grow {
  color: #ef4444;
}
</style>
