<template>
  <section class="w-full bg-emerald-50 pt-8 pb-20 my-20 sm:my-28 md:my-36 mx-[auto] px-4">
    <div  class="max-w-5xl mx-[auto] pt-3" >
        <h1 class="text-center mb-3 font-bold text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit Nullam.</h1>
        <p class="text-center font-semibold text-xl mb-10">Vivamus porttitor sem et odio tempor TESTANDO 123</p>

        <c-swiper
          :slidesPerView="3">
          <div class="bg-white p-4 rounded-xl drop-shadow-lg m-1 mx-10 sm:mx-[auto]">
            <h5 class="text-center font-bold mb-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p class="text-center font-semibold">"Etiam ullamcorper sed dui eu tristique. Donec suscipit pellentesque nibh sit amet eleifend. Integer sollicitudin vestibulum elit ut tincidunt. Praesent luctus, orci nec ornare iaculis, metus nibh pulvinar libero."</p>
            <div class="mt-2 flex items-center justify-center">
              <img class="bg-white rounded-full mr-4" width="60" height="60" src="https://storage.googleapis.com/rytr-me/public/image/testimonials/meri.jpg" alt="">
              <div>
                <p class="font-bold">Meri Pipenbaher</p>
                <p class="font-semibold">Founder, Vidly</p>
              </div>
            </div>
          </div>
        </c-swiper>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  setup() {}
}
</script>