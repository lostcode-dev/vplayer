<template>
  <div
    class="max-w-5xl mx-[auto] pt-3 flex items-center py-20"
  >
    <div class="pr-8 w-full">
      <h1 class="text-center mb-3 font-bold text-4xl">
        Lorem ipsum dolor sit amet.
      </h1>
      <p class="text-center font-semibold text-xl mb-6">Vivamus porttitor sem et odio tempor, consectetur adipiscing elit Nullam.</p>
      <button
        class="rounded-lg text-xl px-8 py-2 bg-emerald-500 font-semibold text-white hover:bg-emerald-600 mt-6"
      >
        Ver Planos
      </button>
    </div>
  </div>
</template>

<script>
import Swiper from '../../Swiper.vue'

export default {
  components: { Swiper },
  setup() {}
}
</script>