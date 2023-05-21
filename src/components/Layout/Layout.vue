<template>
  <div class="w-full h-full bg-white">
    <Header></Header>
    <Home/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import Home from './Section/Home.vue'

export default {
  components: { Header, Footer, Home },
  setup() {}
}
</script>