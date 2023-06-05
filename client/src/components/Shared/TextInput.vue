<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'], // this is required to emit the value to the parent component (see below)
  methods: {
    // emit the value to the parent component
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value)
      // update:modelValue is the v-model syntax for custom components (see JobSearchForm.vue)
    }
  }
}
</script>
