<template>
<div class="bg-img">
  <img src="@/assets/bg-beer.jpg" alt="" >
  </div>
<div class="bg">
  <div class="container-sm">
    <div class="d-flex justify-content-center flex-wrap align-items-center">
        <div  v-for="(item, index) in beer" :key="item.uid" class="card" style="width: 18rem;">
            <div class="card-body">
              <div class="recomended" v-if="index===recomenBeer"><div class="d32"></div></div>
              <h5 class="card-title">{{item.name}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Alc - {{item.alcohol}}</h6>
              <p class="card-text">{{`${item.style} - ${item.brand}. ${item.malts}`}}</p>
              <router-link  :to="{ path: `/beer/${item.id}`}"   class="card-link">Подробнее</router-link>
            </div>
          </div>
    </div>
    <div class="col text-center">
    <button type="button" class="btn btn-warning btn-lg text-center mt-4" v-on:click="changeBeer">Сбежать из этой обрыгаловки?</button>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomePage',
  computed: {
    beer() {
      return this.$store.getters.beer
    },
    recomenBeer(){
      return this.$store.getters.recomendedBeer
    }
  },
  methods: {
    changeBeer(){
      this.$store.dispatch('fetchBeer')
    }
  }
  
}
</script>

<style lang='scss'>
.recomended {
  right: -30px;
  position: absolute;
  top: -30px;
}
.d32 {
width: 60px; 
height: 60px; 
margin: 10px;
background: #D7695A;
position: relative;


}
.d32:before, 
.d32:after {
content: "";
height: 60px; 
width: 60px;
background: inherit;
position: absolute; 
top: 0; 
left: 0;
z-index: 0;
}
.d32:before {
transform: rotate(30deg);
}
.d32:after {
transform: rotate(60deg);
}
.bg {
  background: rgba(235, 235, 235, 0.945);
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: 100vh;
}
.card {
  margin: 20px;
}
.card-title {
  font-family: serif;
}
.bg-img {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position:   center;
  }
  width: 100%;
  height: 10vh;

  position: relative;
  &:before {
    content: 'Наш ассортимент';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.726);
    z-index: 42;
    color: #fff;
    font-size: 2rem;
    padding-top: 10px;
    font-weight: bold;
    text-align: center;
    position: absolute;
  }
}
</style>
