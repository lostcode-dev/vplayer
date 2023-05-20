<template>
  <div
    class="w-full h-full bg-white"
  >
    <Header></Header>
    <Section></Section>
    <SectionTwo />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import Section from './Section/Section.vue'
import SectionTwo from './Section/SectionTwo.vue'

export default {
  components: {Header, Footer, Section, SectionTwo },
  setup() {}
}
</script>