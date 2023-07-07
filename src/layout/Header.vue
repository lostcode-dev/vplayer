<template>
  <header class="w-full bg-emerald-50 fixed z-20" @mouseleave="hideMenu">
    <nav class="p-4 md:flex md:justify-between md:items-center font-semibold">
      <div class="flex justify-between items-center">
        <a class="ml-6" href="">
          <a-logo animated />
        </a>

        <span @click="toggleMenu" class="text-3xl cursor-pointer mx-2 md:hidden block">
          <i-navbar-menu v-if="!isMenuVisible" :width="20" :height="20" />
          <i-navbar-close-menu v-else :width="20" :height="20" />
        </span>
      </div>
      <div>
        <ul
          class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-emerald-50 w-full left-0 md:w-auto md:py-0 py-3 md:pl-0 px-3"
          :class="{ hidden: !isMenuVisible, block: isMenuVisible }"
        >
          <li class="mx-8 my-6 md:my-0">
            <router-link
              class="text-lg font-semibold hover:text-teal-500 duration-500"
              :to="{ name: 'help' }"
            >
              {{  t('help') }}
            </router-link>
          </li>
          <li class="mx-8 my-6 md:my-0">
            <router-link
              class="text-lg font-semibold hover:text-teal-500 duration-500"
              :to="{ name: 'login' }"
            >
              {{ t('login') }}
            </router-link>
          </li>          

          <div class="relative">
            <div
              class="flex items-center cursor-pointer mr-4"
              @click="toggleDropdown"
            >
              <img :src="selectedOption?.image" class="h-8 w-8 rounded-full mr-2" alt="Language Icon">
              <span class="text-lg font-semibold hover:text-teal-500 duration-500">{{ selectedOption?.name }}</span>
            </div>
            <div v-if="isDropdownVisible" class="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div
                v-for="option in languageOptions"
                :key="option.value"
                class="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                @click="selectOption(option)"
              >
                <img :src="option.image" class="h-6 w-6 rounded-full mr-2" alt="Language Icon">
                <span class="text-sm">{{ option.name }}</span>
              </div>
            </div>
          </div>
          
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

    const lang = ref<string>(localStorage.getItem('lang') || 'pt-BR');

    const languageOptions: LanguageOption[] = [
      { value: 'pt-BR', name: 'Português', image: 'src/assets/brazil.png' },
      { value: 'en', name: 'English', image: 'src/assets/usa.png' },
      { value: 'es', name: 'Español', image: 'src/assets/spain.png' }
    ]    


    const selectedOption = computed(() => {
      return languageOptions.find(option => option.value === lang.value)
    })

    watch(lang, (newLang: string) => {
      localStorage.setItem('lang', newLang);
      locale.value = newLang;
      selectedOption.value = languageOptions.find(option => option.value === newLang)
    });

    const handleChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      lang.value = target.value;
    };
    
    const isDropdownVisible = ref(false)

    const toggleDropdown = () => {
      isDropdownVisible.value = !isDropdownVisible.value
    }

    const selectOption = (option: LanguageOption) => {
      lang.value = option.value
      isDropdownVisible.value = false
    }

    return {
      toggleMenu,
      isMenuVisible,
      hideMenu,
      t,
      lang,
      handleChange,
      languageOptions,
      selectedOption,
      isDropdownVisible,
      toggleDropdown,
      selectOption      
      
    }
  }
}
</script>