<template>
  <a
    class="rounded-lg px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 font-semibold text-white transition-all"
    href=""
  >
    <slot />
  </a>
</template>

<script lang="ts">
/*
 - Deve receber algumas propriedades:
  -content
  -href 
  -class
  -font-size
  ...
 - Esse Button deve ser dinâmico ao ponto de ser utilizado por vários pelos 4 pontos da aplicação
 -
 -https://vuejs.org/guide/components/props.html#props
*/
export default {
  components: {},
  setup() {}
}
</script>
