<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header,
  },
  methods: {
    setUser(){
      this.$store.dispatch('fetchUser')
    }
  },
  mounted(){
    this.setUser()
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;500;700&family=Permanent+Marker&display=swap');
* {
  font-family: 'Permanent Marker', cursive;
}
</style>