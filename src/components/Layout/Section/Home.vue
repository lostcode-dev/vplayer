<template>
    <Section />
    <SectionTwo />
    <SectionTree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
</template>

<script>
import Section from './Section.vue'
import SectionTwo from './SectionTwo.vue'
import SectionTree from './SectionTree.vue'
import SectionFour from './SectionFour.vue'
import SectionFive from './SectionFive.vue'
import SectionSix from './SectionSix.vue'

export default {
  components: { Section, SectionTwo, SectionTree, SectionFour, SectionFive, SectionSix },
  setup() {}
}
</script>