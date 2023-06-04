<template>
  <img class="h-8 w-8 rounded-3xl object-cover" :src="imageLink" alt="User profile image" />
</template>

<script>
// this is the options api method of writing vue components
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDk_pGSeCU1lVzSpFsq2KZrFFgtBnVIUZ5i9HGLI1tx3h85nGsF7tTiEg1vf1Ygf3SPs&usqp=CAU'
    }
  }
}
</script>
