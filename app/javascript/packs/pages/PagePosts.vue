<template>
  <div>
    {{posts}}
  </div>
</template>

<script>
  export default {
    computed: {
      posts () {
        return this.$store.state.posts
      }
    },
    beforeCreate() {
      this.$store.dispatch('fetchPosts')
    }
  }
</script>

<style>

</style>
