<template>
    <div class="max-w-5xl mt-10 mb-40 mx-[auto] pt-3" >
        <h1 class="text-center font-bold mb-14 text-3xl">Vivamus porttitor sem et odio tempor.</h1>
        <Swiper>
          <img class="bg-emerald-50" width="170" height="130">
        </Swiper>
    </div>
</template>

<script>
import Swiper from "../../Swiper.vue";

export default {
  components: { Swiper },
  setup() {}
}
</script>