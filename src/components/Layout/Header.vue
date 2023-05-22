<template>
  <header
    class="w-full bg-emerald-50 fixed z-20"
  >
    <nav class="flex justify-between mx-8 px-4 py-5 font-semibold">
      <div>
        <a class="rounded-lg px-4 py-2 font-semibold" href="">
          AlgumaLogo
        </a>
      </div>
      <div class="font-semibold">

      </div>
      <div>
        <a class="rounded-lg px-4 py-2 font-semibold" href="">
          Ajuda
        </a>
        <router-link class="rounded-lg px-4 py-2 font-semibold" :to="{ name: 'login'}">
          Login
        </router-link>
        <Button class="ml-4"/>
      </div>
    </nav>
  </header>
</template>

<script>
import Button from '../Button.vue'

export default {
  components: {Button },
  setup() {}
}
</script>