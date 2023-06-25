<template>
    <section style="height: calc(100vh - 3.5rem);" class="max-w-5xl flex justify-center items-center pt-3 mx-[auto] px-4" >
        <div>
            <h1 class="font-bold text-5xl text-center py-4">Lorem ipsum dolor sit. <br> Scelerisque!</h1>
            <p class="font-semibold	text-center py-2 mb-6">Nullam non facilisis risus, sed tempus leo. Aenean magna erat, sollicitudin in felis ac, maximus placerat orci.<br> In vel ligula justo.</p>
            <iframe class="w-full my-8 px-4 lg:ml-6 h-96 bg-emerald-50 " src="https://www.youtube.com/embed/Q2-0qZoYBA0" title="Barulho de Chuva para Dormir Profundamente e Relaxar - Som de Chuva com Trovões - Rain sounds #61" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="flex justify-center mt-6">
                <a-button :paddingSize="8" fontSize="xl">
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