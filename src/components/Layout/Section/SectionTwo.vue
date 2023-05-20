<template>
    <div style="height: calc(50vh);" class="mx-[auto] max-w-[80%] pt-3" >
        <h1 class="text-center font-bold mb-8 text-3xl">Vivamus porttitor sem et odio tempor.</h1>
        <Swiper/>
    </div>
</template>

<script>
import Swiper from "../../Swiper.vue";

export default {
  components: { Swiper },
  setup() {}
}
</script>