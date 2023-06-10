<template>
  <header
    class="w-full bg-emerald-50 fixed z-20"
  >
    <nav class="flex justify-between items-center mx-8 px-4 py-5 font-semibold">
      <div>
        <img class="w-16 cursor-pointer" src="../assets/logo.png" alt="Logo da empresa" id="logo" href="#">
      </div>      
      <div>
        <ul class="flex justify-between items-center gap- [4vw]" >
          <li>
            <a class="hover:text-gray-500" href="">
              Ajuda
            </a>            
          </li>
          <li>
            <router-link class="hover:text-gray-500" :to="{ name: 'login'}">
              Login
            </router-link>
          </li>
          <li>
            <a-button class="ml-4">Seja o primeiro a saber</a-button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">

export default {
  setup() {}
}
</script>