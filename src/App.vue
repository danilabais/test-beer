<template>
  <Header/>
  <transition name="fade">
    <router-view/>
  </transition>
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
    },
     setBeer(){
       this.$store.dispatch('fetchBeer')
    },
    
  },
  created(){
    this.setUser(),
    this.setBeer()
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;500;700&family=Permanent+Marker&display=swap');
* {
  font-family: 'Permanent Marker', cursive;
}
.fade-enter-active,
.fade-leave-active {
  transition: linear all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>