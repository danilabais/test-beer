<template>
<div class="bg">
  <div class="container-sm " v-if="user && beer">
    <div class="height-fix">
    <img :src="user.avatar" @error="error"   alt="avatar"  class="rounded-circle mx-auto d-block img-fluid avatar border border-primary size">
    </div>
    <hr>
    <h2 class="text-center">{{user.first_name+' '+user.last_name}}</h2>
    <hr>
    <h5 class="text-center">{{user.employment.title}}</h5>
    <hr>
    <p>Полных лет: {{ age - user.date_of_birth.slice(0, 4)}}</p>
    <p>Рекомендованное пиво сегодня:  {{beer[recomenBeer].name}}</p>
  </div>
  <div class="col text-center">
    <button type="button" class="btn btn-warning btn-lg text-center mt-4" v-on:click="changeUser">Сменить пользователя?</button>
    </div>
</div>
</template>

<script>
import pic from '@/assets/robot.png'
export default {
  computed: {
    user(){
      return this.$store.getters.user
    },
    age(){
      let today = new Date()
      return today.getFullYear()
    },
    beer(){
      return  this.$store.getters.beer
    },
    recomenBeer(){
      return this.$store.getters.recomendedBeer
    }
  },
  methods: {
    changeUser() {
      this.$store.dispatch('fetchUser')
    },
    error() {
      this.user.avatar = pic
    }
  }
}
</script>

<style scoped>
.bg {
  background: rgba(235, 235, 235, 0.945);
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: 100vh;
}
.height-fix {
  height: 300px;
}
p {
  font-size: 1.3rem;
}
.size {
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
}
</style>