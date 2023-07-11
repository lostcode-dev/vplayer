<template>
    <section class="w-full flex justify-center items-center pt-20 sm:pt-24 md:pt-28 pb-20 mx-[auto] px-4" >
        <div class="px-4">
            <h1 class="font-bold text-2xl md:text-4xl text-center py-4">Lorem ipsum dolor sit. <br> Scelerisque!</h1>
            <p class="font-semibold	text-center md:text-xl py-2 mb-6">Nullam non facilisis risus, sed tempus leo. Aenean magna erat, sollicitudin in felis ac, maximus placerat orci.<br> In vel ligula justo.</p>
            <iframe class="w-full my-8 px-4 md:px-16 h-96" src="https://www.youtube.com/embed/Q2-0qZoYBA0" title="Barulho de Chuva para Dormir Profundamente e Relaxar - Som de Chuva com Trovões - Rain sounds #61" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="flex justify-center mt-6">
                <a-button 
                :paddingSize="8" 
                fontSize="xl"
                class="md:text-xl"
                >
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