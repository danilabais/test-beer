<template>
    <div class="bg">
  <div class="container-sm " >
      <router-link to="/" class="btn btn-link">Вернуться назад</router-link>
    <h1  class="text-center name">{{oneBeer.name}}</h1>
    <hr>
    <div class="mb-3">
    <h3>Бренд: {{oneBeer.brand}}</h3>
    <h3>Стиль: {{oneBeer.style}}</h3>
    <h3>Хмель: {{oneBeer.hop}}</h3>
    <h3>Дрожжи: {{oneBeer.yeast}}</h3>
    <h3>Солод: {{oneBeer.malts}}</h3>
    <h3>Хмелевая горечь: {{oneBeer.ibu}}</h3>
    <h3>blg: {{oneBeer.blg}}</h3>
    <h3>Содержание спирта: {{oneBeer.alcohol}}</h3>
    </div>
    <div class=" img ">
         <img src="@/assets/bg.jpg" alt="simsons">
    </div>
    
  </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            oneBeer:null
        }
    },
    computed: {
        beer(){
            return this.$store.getters.beer
        }
    },
    created() {
    const oneBeer = this.beer.find((beer) => beer.id == this.$route.params.id);
            if (oneBeer) {
            this.oneBeer = oneBeer;
            }
    
}
}
</script>


<style scoped>
.name {
    font-family: serif;
}
h3 {
    font-family: serif;
    text-align: center;
}
.bg {
    width: 100%;
    
}
.img {
    display: flex;
    justify-content: center;
    object-fit: cover;
}
img {
    max-width: 100%;
}
@media (max-width:1000px) {
    h3 {
        text-align: left;
    }
    
}
</style>

