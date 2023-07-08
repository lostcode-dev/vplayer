<template>
  <header class="w-full bg-emerald-50 fixed z-20">
    <nav class="p-4 md:flex md:justify-between md:items-center font-semibold">
      <div class="flex justify-between items-center">
        <a class="ml-6" href="">
          <a-logo animated />
        </a>
        <div class="flex">
          <a-lang-selector class="mt-2.5 md:hidden"></a-lang-selector>
          <span @click="toggleMenu" class="text-3xl cursor-pointer mx-2 md:hidden block">
            <i-navbar-menu v-if="!isMenuVisible" :width="20" :height="20" />
            <i-navbar-close-menu v-else :width="20" :height="20" />
          </span>

        </div>
      </div>
      <div>
        <ul
          class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-emerald-50 w-full left-0 md:w-auto md:py-0 py-3 md:pl-0 px-3 "
          :class="{ hidden: !isMenuVisible, block: isMenuVisible }"
        >
          <li class="mx-6 my-6 md:my-0">
            <router-link
              class="text-lg font-semibold hover:text-teal-500 duration-500"
              :to="{ name: 'help' }"
            >
              {{  t('help') }}
            </router-link>
          </li>
          <li class="mx-6 my-6 md:my-0">
            <router-link
              class="text-lg font-semibold hover:text-teal-500 duration-500"
              :to="{ name: 'login' }"
            >
              {{ t('login') }}
            </router-link>
          </li>          

          <a-lang-selector v-if="!isMenuVisible"></a-lang-selector>
          
          <a-button class="px-8" fontSize="lg"> {{ t('button') }} </a-button>
        </ul>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
interface LanguageOption {
  value: string;
  name: string;
  image: string;
}


  export default {
    
  setup() {
    const isMenuVisible = ref(false)

    const { t, locale } = useI18n({ useScope: 'global' })

    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value
    }

    const hideMenu = () => {
      isMenuVisible.value = false
    }  
    
    

    return {
      toggleMenu,
      isMenuVisible,
      hideMenu,
      t,          
      
    }
  }
}
</script>