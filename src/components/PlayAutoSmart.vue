<template>
  <div class="w-full h-full flex justify-center items-center absolute z-10">
    <button
      @click="$emit('playAutoSmart')"
      class="px-4 py-2 border-solid border-2 border-emerald-200 bg-slate-200 rounded-lg"
    >
      <p>Seu vídeo já começou</p>
      <volume-variant-off />
      <p>Clique para ouvir</p>
    </button>
  </div>
</template>

<script>
import VolumeVariantOff from './icons/VolumeVariantOff.vue'
export default {
  components: { VolumeVariantOff },
  setup() {}    
}
</script>