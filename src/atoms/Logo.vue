<template>
  <div
    :class="{ animate__animated: animated }"
    class="animate__backInLeft text-bold text-3xl"
    width="160"
    height="64"
  >
    <div
      :class="{
        animate__animated: animated,
        animate__jello: animatedJello,
        animate__bounce: animatedBounce
      }"
      @mouseover="animatedJello = true"
      @mouseout="animatedJello = false"
    >
      <span>V</span>
      <span>i</span>
      <span>d</span>
      <span>i</span>
      <span>f</span>
      <span>y</span>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'

const props = defineProps({
  animated: Boolean
})

const animatedJello = ref(false)
const animatedBounce = ref(false)

setInterval(() => {
  animatedBounce.value = !animatedBounce.value
  console.log(animatedBounce.value)
}, 3000)
</script>

<style scoped>
.keyframe-logo {
  width: 200px;
  height: 64px;
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: visible;
}
</style>