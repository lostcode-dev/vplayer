<template>
  <section
    class="w-full flex justify-center items-center pt-20 sm:pt-24 md:pt-28 pb-20 mx-[auto] px-4"
  >
    <div class="px-4">
      <h1 class="font-bold text-2xl md:text-4xl text-center py-4">
        Compartilhe seus vídeos em qualquer lugar
      </h1>
      <p class="font-semibold text-center md:text-xl py-2 mb-6">
        Ao contrário dos outros players que foram feitos para conteúdo ou somente para vendas,<br>
        foi feito para se adaptar conforme sua necessidade.
      </p>

      <video autoplay controls class="w-full my-8 px-4 md:px-16 h-96 rounded-md">
        <source
          src="../../assets/desktop-masthead-720p-2.mp4"
          type="video/mp4"
        />
      </video>

      <div class="flex justify-center mt-6">
        <a-button :paddingSize="8" fontSize="xl" class="md:text-xl">
          Entrar na lista de espera
        </a-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  setup() {}
}
</script>