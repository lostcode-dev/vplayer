<template>
  <div class="w-full h-full bg-white">
    <Header></Header>
    <Home/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from '../components/Layout/Footer.vue'
import Header from '../components/Layout/Header.vue'
import Home from '../components/Layout/Section/Home.vue'


export default {
  components: { Header, Footer, Home, Footer },
  setup() {}
}
</script>