<template>
  <section class="w-full bg-emerald-50 px-4 py-8">
    <div
      
      class="max-w-5xl mx-[auto] pt-3 flex justify-center items-center flex-col"
    >
      <h1 class="text-center mb-4 font-bold text-4xl">Lorem ipsum dolor sit amet Nullam.</h1>
      <p class="text-center font-semibold text-xl mb-10">
        Nullam facilisis semper aliquet. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Pellentesque ut rutrum purus.
      </p>

      <div class=" lg:flex lg:justify-center lg:items-center px-6">
        <div class="max-w-[85%] lg:max-w-[30%] mx-10 px-4 lg:pr-8 flex lg:block lg:text-left text-sm lg:text-xl">
          <a-button
            :activeButton="isActive(1)"
            @click="toggleButton(1)"         
                      
            class="lg:px-6 py-2 mt-3 mb-4"
          >
            <i-fast-foward-ten class="lg:mr-2" :width="25" :height="25" /> 
            <span class="hidden lg:inline">
              Nibh sagittis
            </span>
          </a-button>
          <a-button
            :activeButton="isActive(2)"
            @click="toggleButton(2)"           
            
            class="lg:px-5 py-2 mt-3 mb-4"
          >
            <i-rewind-ten class="lg:mr-2" :width="25" :height="25" /> 
            <span class="hidden lg:inline">
              Suspendisse tortor
            </span>
          </a-button>
          <a-button
            :activeButton="isActive(3)"
            @click="toggleButton(3)"                        
            class="lg:px-6 py-2 mt-3 mb-4"
          >
            <i-pause class="lg:mr-2"  :width="25" :height="25" /> 
            <span class="hidden lg:inline">
              Sed enim tempus
            </span>
          </a-button>
          <a-button
            :activeButton="isActive(4)"
            @click="toggleButton(4)"                        
            class="lg:px-6 py-2 mt-3 mb-4"
          >
            <i-play class="lg:mr-2"  :width="25" :height="25" />
            <span class="hidden lg:inline">
              Aliquam volutpat
            </span>  
          </a-button>
          <a-button
            :activeButton="isActive(5)"
            @click="toggleButton(5)"
                        
            class="lg:px-6 py-2 mt-3 mb-4"            
          >
            <i-volume-mute class="lg:mr-2" :width="25" :height="25" /> 
            <span class="hidden lg:inline">
              Etiam metus
            </span>
          </a-button>
          <a-button
            :activeButton="isActive(6)"
            @click="toggleButton(6)"
            
            textAlign="left"
            class="lg:px-6 py-2 mt-3 mb-4"
          >
            <i-volume-high class="lg:mr-2" :width="25" :height="25" /> 
            <span class="hidden lg:inline">
              Volutpat metus
            </span>
          </a-button>
        </div>
        <div v-for="(item,index) in productFeaturesVideos" :key="index">
          <iframe v-if="isActive(index + 1)"
            class="my-8 lg:ml-6 w-full h-96 bg-white"
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
import { ref } from 'vue';

export default {    
  setup() {
    let activeButton = ref(1);
        
    
    const toggleButton = (button : number) => {
      activeButton.value = button;
           
      
    };

    const isActive = (buttonNumber : number) => {
      return activeButton.value === buttonNumber;
      
    };

    const productFeaturesVideos = ref([
      {
        src: 'https://www.youtube.com/embed/Q2-0qZoYBA0',
        title: 'Barulho de Chuva para Dormir Profundamente e Relaxar - Som de Chuva com Trovões - Rain sounds #61'
      },
      {
        src: 'https://www.youtube.com/embed/rgjDz2h4GrY' ,
        title: 'BARULHO DE CHUVA COM TROVÃO EM TELA ESCURA PARA DORMIR.'
      },
      {
        src: 'https://www.youtube.com/embed/aLuShQwNYRE' ,
        title: 'Relaxing Music for Sleep + Insomnia - Stress Relief, Relaxing Music, Music for Deep Sleep'
      },
      {
        src: 'https://www.youtube.com/embed/DNJ5JqLw9YM' ,
        title: '2 Hours Ghibli Bmg For Work 🚖 Relaxing Ghibli Music, Ghibli Studio'
      },
      {
        src: 'https://www.youtube.com/embed/JzRfvrLNoOQ' ,
        title: 'Studio Ghibli ambient music'
      },
      {
        src: 'https://www.youtube.com/embed/-pBLZzZdQ0s' ,
        title: 'The Sound of Inner Peace 5 | Relaxing Music for Meditation, Zen, Yoga & Stress Relief'
      },
    ])

    return {           
      toggleButton,
      isActive,
      productFeaturesVideos
    };
  }
};
</script>

