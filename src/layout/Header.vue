<template>
  <header
    class="w-full bg-emerald-50 fixed z-20"
  >
    <nav class=" p-5 md:flex md:justify-between md:items-center font-semibold">
      <div class="flex justify-between items-center">
        <span class="text-2xl font-[Poppins] cursor-pointer">
          <img class="h-10 inline " src="../assets/logo.png" alt="Logo da empresa" id="logo" href="#">
          Raydan
        </span>

        <span 
          @click="toggleMenu"
          class=" text-3xl cursor-pointer mx-2 md:hidden block" 
          >
          <i-play v-if="!isMenuVisible" :width="20" :height="20" />
          <i-pause v-else :width="20" :height="20" />
        </span>
      </div>      
      <div>
        <ul        
        class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-emerald-50 w-full left-0 md:w-auto md:py-0 py-3 md:pl-0 pl-3"
        :class="{ 'hidden md:block': !isMenuVisible }"
        @click="isMenuVisible = false"
        >
          <li class="mx-8 my-6 md:my-0">
            <a class="text-lg font-semibold hover:text-teal-500 duration-500" href="">
              Ajuda
            </a>            
          </li>
          <li class="mx-8 my-6 md:my-0">
            <router-link class="text-lg font-semibold hover:text-teal-500 duration-500" :to="{ name: 'login'}">
              Login
            </router-link>
          </li>
          
          <a-button class="text-lg mx-8">
            Seja o primeiro a saber
          </a-button>
          
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
   
  setup() {
    const isMenuVisible = ref(true);
     
    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value;
    }

  return {    
    toggleMenu,
    isMenuVisible
  };
    
  }
}
  

</script>