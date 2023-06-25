<template>
  <section class="w-full bg-emerald-50">
    <div
      
      class="max-w-5xl mx-[auto] pt-3 flex justify-center items-center flex-col"
    >
      <h1 class="text-center mb-4 font-bold text-4xl">Lorem ipsum dolor sit amet Nullam.</h1>
      <p class="text-center font-semibold text-xl mb-10">
        Nullam facilisis semper aliquet. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Pellentesque ut rutrum purus.
      </p>

      <div class="w-full flex justify-center items-center">
        <div class="max-w-[30%] pr-8">
          <a-button
            :activeButton="isActive(1)"
            @click="toggleButton(1)"
            fontSize="xl"
            textAlign="left"            
            class="px-8 py-2 mt-3 mb-4 w-full"
          >
            <i-fast-foward-ten class="mr-2" :width="25" :height="25" /> Nibh sagittis
          </a-button>
          <a-button
            :activeButton="isActive(2)"
            @click="toggleButton(2)"
            fontSize="xl"
            textAlign="left"
            class="px-8 py-2 mt-3 mb-4 w-full"
          >
            <i-rewind-ten class="mr-2" :width="25" :height="25" /> Suspendisse tortor
          </a-button>
          <a-button
            :activeButton="isActive(3)"
            @click="toggleButton(3)"
            fontSize="xl"
            textAlign="left"
            class="px-8 py-2 mt-3 mb-4 w-full"
          >
            <i-pause class="mr-2" :width="25" :height="25" /> Sed enim tempus
          </a-button>
          <a-button
            :activeButton="isActive(4)"
            @click="toggleButton(4)"
            fontSize="xl"
            textAlign="left"
            class="px-8 py-2 mt-3 mb-4 w-full"
          >
            <i-play class="mr-2" :width="25" :height="25" /> Aliquam volutpat
          </a-button>
          <a-button
            :activeButton="isActive(5)"
            @click="toggleButton(5)"
            fontSize="xl"
            textAlign="left"
            class="px-8 py-2 mt-3 mb-4 w-full"            
          >
            <i-volume-mute class="mr-2" :width="25" :height="25" /> Etiam metus
          </a-button>
          <a-button
            :activeButton="isActive(6)"
            @click="toggleButton(6)"
            fontSize="xl"
            textAlign="left"
            class="px-8 py-2 mt-3 mb-4 w-full"
          >
            <i-volume-high class="mr-2" :width="25" :height="25" /> Volutpat metus
          </a-button>
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

import { ref } from 'vue';
export default {    
  setup() {
    let activeButton = ref(1);
        
    
    const toggleButton = (button : number) => {
      activeButton.value = button;
           
      
    };

    const isActive = (buttonNumber : number) => {
      return activeButton.value === buttonNumber;
      
    }

    return {           
      toggleButton,
      isActive
    };
  }
};
</script>

<style scoped>
.active {
  background-color: #10b981;
  color: white;

  transition: background-color 1000ms linear;
}

.active:hover {
  background-color: #047857;
}
</style>