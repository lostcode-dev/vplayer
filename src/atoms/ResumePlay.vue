<template>
  <div
    class="w-full h-full flex justify-center items-center absolute bg-emerald-200 z-10"
  >
    <div>
      <h3 class="text-center my-4">Você já começou a assistir esse vídeo</h3>
      <div class="flex">
        <button class="px-4 py-2 flex justify-center items-center" @click="$emit('playResume')">
            <i-play class="mx-1"/>
            Continuar Assistindo
        </button>
        <button class="px-4 py-2 flex justify-center items-center" @click="$emit('reloadResume')">
            <i-reload class="mx-1"/>
            Assistir do início?
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  setup() {}
}
</script>