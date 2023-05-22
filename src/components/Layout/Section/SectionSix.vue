<template>
  <section
    class="max-w-5xl mx-[auto] py-20"
  >
    <div class="pr-8 w-full flex flex-col">
      <h1 class="text-center mb-3 font-bold text-4xl">
        Lorem ipsum dolor sit amet.
      </h1>
      <p class="text-center font-semibold text-xl mb-6">Vivamus porttitor sem et odio tempor, consectetur adipiscing elit Nullam.</p>
      <button
        class="rounded-lg text-2xl px-14 py-3 bg-emerald-500 font-semibold text-white hover:bg-emerald-600 mt-6 self-center"
      >
        Ver Planos
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import Swiper from '../../Swiper.vue'

export default {
  components: { Swiper },
  setup() {}
}
</script>