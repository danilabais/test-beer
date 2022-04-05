<template>

<header class="p-3  border-bottom bg-light">
   <div class="container">
    <header class="d-flex flex-wrap justify-content-center ">
      <a href="/" class="d-flex align-items-center   me-md-auto text-dark text-decoration-none">
        
        <span class="fs-4">Пивная <strong>dbais</strong></span>
      </a>
      <ul class="nav nav-pills">
        <router-link to="/"  active-class="active " class="nav-item nav-link">Бар</router-link>
        <router-link to="/profile"  active-class=" active" class="nav-item nav-link">Мой профиль</router-link>
      </ul>

    </header>
    <hr>
    <h3 v-if="user">Добро пожаловать, {{user.username}}!</h3>
  </div>
  </header>

  
</template>
<style scoped >

  a:-webkit-any-link .router-link-active.link {
    text-decoration: underline !important;
  }
  a:-webkit-any-link {
    text-decoration:  none ;
  }
  strong {
    font-size: 2rem;
    margin-right: 30px;
  }
  h3 {
    font-size: 1.3rem;
    text-align: center;
    margin: 0;
  }
</style>

<script>
export default {
  computed: {
    user(){
      return this.$store.getters.user
    }
  }
}
</script>
