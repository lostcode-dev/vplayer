<template>
  <section class="w-full bg-emerald-50">
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
          <Button
            :class="'active'"
            class="rounded-lg text-left text-xl px-8 py-2 font-semibold hover:text-emerald-600 mt-3 mb-6 w-full"
          >
            <fast-foward-ten class="mr-2" :width="25" :height="25" /> Nibh sagittis
          </Button>
          <button
            class="rounded-lg text-left text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-6 w-full"
          >
            <rewind-ten class="mr-2" :width="25" :height="25" /> Suspendisse tortor
          </button>
          <button
            class="rounded-lg text-left text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-6 w-full"
          >
            <pause class="mr-2" :width="25" :height="25" /> Sed enim tempus
          </button>
          <button
            class="rounded-lg text-left text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-6 w-full"
          >
            <play class="mr-2" :width="25" :height="25" /> Aliquam volutpat
          </button>
          <button
            class="rounded-lg text-left text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-6 w-full"
          >
            <volume-mute class="mr-2" :width="25" :height="25" /> Etiam metus
          </button>
          <button
            class="rounded-lg text-left text-xl px-8 py-2 font-semibold hover:text-emerald-600 mb-3 w-full"
          >
            <volume-high class="mr-2" :width="25" :height="25" /> Volutpat metus
          </button>
        </div>
        <iframe
          class="ml-6 w-full h-96 bg-white"
          src="https://www.youtube.com/embed/Q2-0qZoYBA0"
          title="Barulho de Chuva para Dormir Profundamente e Relaxar - Som de Chuva com Trovões - Rain sounds #61"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import FastFowardTen from '../../icons/FastFowardTen.vue'
import Pause from '../../icons/Pause.vue'
import Play from '../../icons/Play.vue'
import RewindTen from '../../icons/RewindTen.vue'
import VolumeHigh from '../../icons/VolumeHigh.vue'
import VolumeMute from '../../icons/VolumeMute.vue'
import Swiper from '../../Swiper.vue'
import Button from '../../Button.vue'

export default {
  components: { Swiper, FastFowardTen, RewindTen, Pause, Play, VolumeMute, VolumeHigh, Button },
  setup() {}
}
</script>

<style scoped>
.active {
  background-color: #10b981;
  color: white;

  transition: backforung-color 1000ms linear;
}

.active:hover {
  background-color: #047857;
}
</style>