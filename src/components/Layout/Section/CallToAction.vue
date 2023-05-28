<template>
  <section
    class="max-w-5xl mx-[auto] py-20"
  >
    <div class="pr-8 w-full flex flex-col">
      <h1 class="text-center mb-3 font-bold text-4xl">
        Lorem ipsum dolor sit amet.
      </h1>
      <p class="text-center font-semibold text-xl mb-6">Vivamus porttitor sem et odio tempor, consectetur adipiscing elit Nullam.</p>
      <Button
        fontSize="xl"
        :paddingSize="8"
        class="mt-6 self-center"
      >
        Receba informações privilegiadas
      </Button>
    </div>
  </section>
</template>

<script lang="ts">
import Swiper from '../../Swiper.vue'
import Button from '../../Button.vue'

export default {
  components: { Swiper, Button },
  setup() {}
}
</script>