<template>
  <footer
    class="w-full bg-emerald-50 "
  >
    <nav class="flex justify-center mx-2 sm:mx-4 lg:mx-8 px- 1 sm:px-2 lg:px-4 py-4 font-semibold">
      <div>
        <router-link class="rounded-lg px-2 sm:px-4 py-2 font-semibold" :to=" { name: 'terms-of-use'}">
          Termos de Uso
        </router-link>
        <router-link class="rounded-lg ml-2 sm:ml-4 px-2 sm:px-4 py-2 font-semibold" :to=" { name: 'privacy-policy'}">
          Políticas de Privacidade
        </router-link>
      </div>
    </nav>
  </footer>
  <RouterView />
</template>

<script lang="ts">

export default {
  components: { },
  setup() {}
}
</script>