<template>
  <div class="w-full h-full bg-white flex justify-center">
    <div class="w-4/12 px-24 mt-[-50px] flex justify-center flex-col">
        <a-logo class="text-center"/>

        <div style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" class="w-full my-6 px-8 py-4 shadow-emerald-500 rounded-lg border-2 max-w-xl	mx-[auto]">
          <p class="text-xl mb-4 font-semibold">Login</p>

          <p class="mb-1 text-lg">Email</p>
          <input class="w-full rounded-md py-1 border-2 border-gray-200 mb-4" type="text">

          <p class="mb-1 text-lg">Password</p>
          <input class="w-full rounded-md py-1 border-2 border-gray-200 mb-6" type="password">

          <button class="px-6 py-2 font-bold text-lg bg-emerald-500 rounded-md mx-[auto] block text-white">Log in</button>

          <br>

          <a href="">Recuperar Senha</a>

          <br>

          <span>Ainda não tem conta? <a href="">Registre-se</a></span>
          </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  components: { },
  setup() {}
}
</script>