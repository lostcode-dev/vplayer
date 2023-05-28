<template>
  <img
    v-if="type === 'input' && currentTime === 0"
    src="https://neilpatel.com/wp-content/uploads/2018/01/thumbnail-pronta-snappa-2.jpeg"
    class="w-full h-full flex justify-center items-center absolute bg-emerald-200 z-20"
  />
  <!-- ADICIONAR CTA EM OUTPUT -->
  <img
    v-if="type === 'output' && isPaused"
    src="https://neilpatel.com/wp-content/uploads/2018/01/thumbnail-pronta-snappa-2.jpeg"
    class="w-full h-full flex justify-center items-center absolute bg-emerald-200 z-20"
  />
  <img
    v-if="type === 'ended' && currentTime === duration"
    src="https://neilpatel.com/wp-content/uploads/2018/01/thumbnail-pronta-snappa-2.jpeg"
    class="w-full h-full flex justify-center items-center absolute bg-emerald-200 z-20"
  />
</template>

<script lang="ts">
export default {
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'input'
    },
    isPaused: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  setup() {}
}
</script>