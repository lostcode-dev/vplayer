<template>
  <div class="about">
    <div class="relative">
      <div v-if="autoSmart" class="w-full h-full flex justify-center items-center absolute z-10">
        <button
          @click="playAutoSmart()"
          style="top: 39%; right: 26%"
          class="px-4 py-2 border-solid border-2 border-indigo-200 bg-slate-200 rounded-lg"
        >
          Clique para ouvir
        </button>
      </div>
      <div
        v-if="resumePlay"
        class="w-full h-full flex justify-center items-center absolute bg-indigo-200 z-10"
      >
        <div>
          <p class="text-center my-4">Você já começou a assistir esse vídeo</p>
          <div>
            <button class="px-4 py-2" @click="playResume()">Continuar Assistindo</button>
            <button class="px-4 py-2" @click="reloadResume()">Assistir do início?</button>
          </div>
        </div>
      </div>
      <div
        v-if="controls" 
        class="w-full bottom-0 absolute z-10 py-2 bg-slate-200">
        <button
          @click="pause()"
          class="px-4 py-2 border-solid border-2 border-indigo-200 bg-slate-200 rounded-lg"
        >
          Pause
        </button>
        <button
          @click="retro()"
          class="px-4 py-2 border-solid border-2 border-indigo-200 bg-slate-200 rounded-lg"
        >
          Retro
        </button>
        <button
          @click="skip()"
          class="px-4 py-2 border-solid border-2 border-indigo-200 bg-slate-200 rounded-lg"
        >
          Skip
        </button>
        <button
          @click="changeVolume()"
          class="px-4 py-2 border-solid border-2 border-indigo-200 bg-slate-200 rounded-lg"
        >
          Volume
        </button>
        <button
          @click="requestFullScreen()"
          class="px-4 py-2 border-solid border-2 border-indigo-200 bg-slate-200 rounded-lg"
        >
          Full Screen
        </button>

        {{ timeFormated }}
      </div>
      <video
        ref="playerVideo"
        :width="width"
        :autoplay="autoplay"
        :muted="muted"
        @ended="handlerEnd"
        @timeupdate="timeUpdated"
      >
        <source src="../assets/mov_bbb.mp4" type="video/mp4" />
        <source src="../assets/mov_bbb.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>


<script>
import { defineComponent, reactive, ref, toRefs, computed } from 'vue'

export default defineComponent({
  setup() {
    const playerVideo = ref(null)
    const state = reactive({
      width: 720,
      autoplay: true,
      muted: true,
      controls: true,
      autoSmart: true,
      resumePlay: false,
      currentTime: 0,
    })

    const playAutoSmart = () => {
      playerVideo.value.muted = false
      state.autoSmart = false
    }

    const playResume = () => {
      playerVideo.value.play()
      state.resumePlay = false
      state.muted = false
    }

    const reloadResume = () => {
      playerVideo.value.load()
      state.resumePlay = false
      state.muted = false
    }

    const handlerEnd = () => {
      state.autoSmart = false
      state.resumePlay = true
    }

    const pause = () => {
      playerVideo.value.pause()
      state.resumePlay = true
    }

    const retro = () => {
      playerVideo.value.currentTime -= 10
    }

    const skip = () => {
      playerVideo.value.currentTime += 10
    }

    const changeVolume = () => {
      playerVideo.value.volume -= 0.2
    }

    const timeUpdated = () => {
      state.currentTime = playerVideo.value.currentTime;
    }

    const requestFullScreen = () => {
      playerVideo.value.requestFullscreen()
    }

    const exitFullScreen = () => {
      playerVideo.value.exitFullscreen()
    }

    const timeFormated = computed(() => {
      return convertTime(parseFloat(state.currentTime))
    })

    const convertTime = (timeSeconds) => {
      var hour = 0;
      var seconds = parseInt(timeSeconds);

      var hourFormated = hour < 10 ? "0" + hour : hour;
      var secondsFormated = seconds < 10 ? "0" + seconds : seconds;
      return hourFormated + ":" + secondsFormated;
    }

    return {
      ...toRefs(state),
      playAutoSmart,
      playerVideo,
      playResume,
      reloadResume,
      handlerEnd,
      pause,
      retro,
      skip,
      requestFullScreen,
      exitFullScreen,
      changeVolume,
      timeUpdated,
      convertTime,
      timeFormated
    }
  }
})
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
