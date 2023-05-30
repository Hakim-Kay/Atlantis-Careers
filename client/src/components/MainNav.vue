<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a class="flex h-full items-center text-xl" v-bind:href="url"> {{ company }} </a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full items-center">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in menuItems" v-bind:key="menuItem">
              <a class="flex h-full items-center py-2.5" href="#">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <action-button />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton: ActionButton
  },
  data() {
    return {
      company: 'Atlantis Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Atlantis', 'How we hire', 'Students', 'Jobs']
    }
  }
}
</script>
