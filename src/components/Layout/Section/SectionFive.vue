<template>
  <div
    style="height: calc(100vh - 3.5rem)"
    class="max-w-5xl mx-[auto] pt-3 flex justify-center items-center flex-col"
  >
    <h1 class="text-center mb-4 font-bold text-4xl">Lorem ipsum dolor sit amet Nullam.</h1>
    <p class="text-center font-semibold text-xl mb-10">
      Nullam facilisis semper aliquet. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Pellentesque ut rutrum purus.
    </p>

    <div class="w-full flex justify-center items-center">
      <div class="max-w-[30%] pr-8">
        <button class="rounded-lg text-xl px-8 py-2 font-semibold hover:text-emerald-600 mt-3 mb-6">
          Nibh sagittis
        </button>
        <button class="rounded-lg text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-6">
          Suspendisse a tortor
        </button>
        <button class="rounded-lg text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-6">
          Sed at enim tempus
        </button>
        <button class="rounded-lg text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-6">
          Aliquam volutpat 
        </button>
        <button class="rounded-lg text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-6">
          Etiam metus
        </button>
        <button class="rounded-lg text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-3">
          Volutpat metus
        </button>
      </div>
          <iframe class="ml-6 w-full h-96 " src="https://www.youtube.com/embed/Q2-0qZoYBA0" title="Barulho de Chuva para Dormir Profundamente e Relaxar - Som de Chuva com Trovões - Rain sounds #61" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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