<template>
  <section class="w-full bg-emerald-50 px-4 py-8 md:py-12 lg:py-16">
    <div class="max-w-5xl mx-[auto] pt-3 flex justify-center flex-col">
      <h1 class="text-center mb-4 font-bold text-2xl md:text-4xl">
        Lorem ipsum dolor sit amet Nullam.
      </h1>
      <p class="text-center font-semibold md:text-xl mb-10">
        Nullam facilisis semper aliquet. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Pellentesque ut rutrum purus.
      </p>

      <div class="lg:flex lg:justify-center lg:items-center px-4 md:px-16">
        <div
          class="lg:max-w-[35%] px-4 flex justify-center lg:block lg:text-left text-sm lg:text-xl"
        >
          <a-button
            v-for="(button, index) in buttons"
            :key="index"
            :activeButton="isActive(index + 1)"
            @click="toggleButton(index + 1)"
            class="lg:w-64 lg:text-left lg:px-6 md:py-2 py-2 mt-3 mb-3"
          >
            <component :is="button.iconComponent" class="lg:mr-2" :width="25" :height="25" />
            <span class="hidden lg:inline">{{ button.label }}</span>
          </a-button>
          
        </div>
        <div v-for="(item, index) in productFeaturesVideos" :key="index">
          <iframe
            v-if="isActive(index + 1)"
            class="md:pl-4 md:pr-2 my-8  lg:mr-40 w-full h-96"
            :src="item.src"
            :title="item.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    let activeButton = ref(1)

    const toggleButton = (button: number) => {
      activeButton.value = button
    }

    const isActive = (buttonNumber: number) => {
      return activeButton.value === buttonNumber
    }

    const productFeaturesVideos = ref([
      {
        src: 'https://www.youtube.com/embed/Q2-0qZoYBA0',
        title:
          'Barulho de Chuva para Dormir Profundamente e Relaxar - Som de Chuva com Trovões - Rain sounds #61'
      },
      {
        src: 'https://www.youtube.com/embed/rgjDz2h4GrY',
        title: 'BARULHO DE CHUVA COM TROVÃO EM TELA ESCURA PARA DORMIR.'
      },
      {
        src: 'https://www.youtube.com/embed/aLuShQwNYRE',
        title:
          'Relaxing Music for Sleep + Insomnia - Stress Relief, Relaxing Music, Music for Deep Sleep'
      },
      {
        src: 'https://www.youtube.com/embed/DNJ5JqLw9YM',
        title: '2 Hours Ghibli Bmg For Work 🚖 Relaxing Ghibli Music, Ghibli Studio'
      },
      {
        src: 'https://www.youtube.com/embed/JzRfvrLNoOQ',
        title: 'Studio Ghibli ambient music'
      },
      {
        src: 'https://www.youtube.com/embed/-pBLZzZdQ0s',
        title:
          'The Sound of Inner Peace 5 | Relaxing Music for Meditation, Zen, Yoga & Stress Relief'
      }
    ])

    const buttons = [
      {
        label: 'Nibh sagittis',
        iconComponent: 'i-fast-foward-ten'
      },
      {
        label: 'Suspendisse tortor',
        iconComponent: 'i-rewind-ten'
      },
      {
        label: 'Sed enim tempus',
        iconComponent: 'i-pause'
      },
      {
        label: 'Aliquam volutpat',
        iconComponent: 'i-play'
      },
      {
        label: 'Etiam metus',
        iconComponent: 'i-volume-mute'
      },
      {
        label: 'Volutpat metus',
        iconComponent: 'i-volume-high'
      }
    ]

    return {
      toggleButton,
      isActive,
      productFeaturesVideos,
      buttons
    }
  }
}
</script>

