<template>
<div class="bg-img">
  <img src="@/assets/bg-beer.jpg" alt="" >
  </div>
<div class="bg">
  <div class="container-sm">
    <div class="d-flex justify-content-center flex-wrap align-items-center">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Подробнее</a>
            </div>
          </div>
          
         

    </div>
    <div class="col text-center">
    <button type="button" class="btn btn-warning btn-lg text-center mt-4" v-on:click="changeUser">Сбежать из этой обрыгаловки?</button>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomePage'
  
}
</script>

<style lang='scss'>
.bg {
  background: rgba(235, 235, 235, 0.945);
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: 100vh;
}
.card {
  margin: 20px;
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
