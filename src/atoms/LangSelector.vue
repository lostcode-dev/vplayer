<template>
  <div class="relative mr-8 ml-2" >
    <div
      class="flex items-center cursor-pointer "             
      @mouseenter="toggleDropdown"                           
    >
      <img :src="selectedOption?.image" class="h-6 w-6 rounded-full" alt="Language Icon">
      
    </div>
    <div v-if="isDropdownVisible" @mouseleave="hideLangMenu" class="left-1/2 transform -translate-x-1/2 absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div
        v-for="option in languageOptions"
        :key="option.value"
        class="flex justify-start items-center py-3 pl-4 pr-10 hover:bg-gray-100 cursor-pointer hover:text-teal-500 duration-500"
        @click="selectOption(option)"
      >
        <img :src="option.image" class="h-6 w-6 rounded-full mr-3" alt="Language Icon">
        <span class="text-sm font-semibold text-right">{{ option.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, watch, computed} from 'vue'
import { useI18n } from 'vue-i18n'
interface LanguageOption {
  value: string;
  name: string;
  image: string;
}

export default {
  props: {
    

  },
  setup() {
    const { t, locale } = useI18n({ useScope: 'global' })

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
      lang.value = newLang;
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
    
    const hideLangMenu = () => {
      isDropdownVisible.value = false
    }

    return {      
      t,
      lang,
      handleChange,
      languageOptions,
      selectedOption,
      isDropdownVisible,
      toggleDropdown,
      selectOption,
      hideLangMenu      
      
    }

  }
}

</script>