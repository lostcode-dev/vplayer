<template>
    <div style="height: calc(100vh - 3.5rem);" class="flex justify-center items-center pt-3" >
        <div>
            <h1 class="font-bold text-5xl text-center py-4">Lorem ipsum dolor sit. <br> Scelerisque!</h1>
            <p class="font-semibold	text-center py-2">Nullam non facilisis risus, sed tempus leo. Aenean magna erat, sollicitudin in felis ac, maximus placerat orci.<br> In vel ligula justo.</p>
            <div style="height: 200px; width: 400px" class="mx-[auto] my-6 bg-indigo-100"></div>
            <div class="flex justify-center">
                <button class="rounded-lg text-xl px-8 py-2 bg-indigo-700 font-semibold text-white hover:bg-indigo-600" href="">
                    Ver Planos
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../../Button.vue'
export default {
  components: {Button },
  setup() {}
}
</script>