<template>
  <div id="player" class="relative">
    <thumbnails type="input" :currentTime="currentTime" />
    <thumbnails type="output" :isPaused="resumePlay" />
    <thumbnails type="ended" :currentTime="currentTime" :duration="duration" />

    <play-auto-smart v-if="autoSmart" @play-auto-smart="playAutoSmart()" />
    <resume-play v-if="resumePlay" @play-resume="playResume()" @reload-resume="reloadResume()" />
    <video
      ref="playerVideo"
      :width="width"
      :autoplay="autoplay"
      :muted="muted"
      @ended="handlerEnd"
      @timeupdate="timeUpdated"
      :controls="false"
      @click="pause()"
    >
      <source src="../assets/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <controls
      v-if="controls"
      @play="playResume()"
      @pause="pause()"
      @retro="retro()"
      @skip="skip()"
      @update:change-volume="(value) => changeVolume(value)"
      @update:change-time="(value) => changeTime(value)"
      @requestFullScreen="requestFullScreen()"
      @change-muted="changeMuted()"
      :timeFormated="timeFormated"
      :isPaused="!resumePlay"
      :isMuted="muted"
      :volume="currentVolume"
      :progressTime="progressTime"
      :currentTime="currentTime"
      :duration="duration"
    />
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, ref, toRefs, computed } from 'vue'
import Controls from '../components/Controls.vue'
import PlayAutoSmart from '../components/PlayAutoSmart.vue'
import ResumePlay from '../components/ResumePlay.vue'
import Thumbnails from '../components/Thumbnails.vue'

interface PlayerVideo {
  muted: boolean
  play: any
  load: any
  pause: any
  currentTime: number
  volume: number
  duration: number
  requestFullscreen: any
  exitFullscreen: any
}

interface PlayerVideoRef {
  value: PlayerVideo | null
}
 

export default defineComponent({
  components: { PlayAutoSmart, ResumePlay, Controls, Thumbnails },
  setup() {
    const playerVideo: PlayerVideoRef = ref(null)
    const state = reactive({
      width: 720,
      autoplay: true,
      muted: true,
      controls: true,
      autoSmart: true,
      resumePlay: false,
      currentTime: 0,
      currentVolume: 1,
      progressTime: 0,
      duration: 0
    })

    const playAutoSmart = () => {
      if (playerVideo.value) {
        playerVideo.value.muted = false
      }
      state.muted = false
      state.autoSmart = false
    }

    const playResume = () => {
      if (playerVideo.value) {
        playerVideo.value.play()
      }
      state.resumePlay = false
      state.muted = false
      state.autoSmart = false
    }

    const reloadResume = () => {
      if (playerVideo.value) {
        playerVideo.value.load()
      }
      state.resumePlay = false
      state.muted = false
      state.autoSmart = false
    }

    const handlerEnd = () => {
      state.autoSmart = false
      state.resumePlay = true
    }

    const changeMuted = () => {
      if (playerVideo.value) {
        state.muted = !playerVideo.value.muted
        playerVideo.value.muted = state.muted
      }
    }

    const pause = () => {
      if (playerVideo.value) {
        playerVideo.value.pause()
      }
      state.resumePlay = true
    }

    const retro = () => {
      if (playerVideo.value) {
        playerVideo.value.currentTime -= 10
      }
    }

    const skip = () => {
      if (playerVideo.value) {
        playerVideo.value.currentTime += 10
      }
    }

    const changeVolume = (value: number) => {
      if (playerVideo.value) {
        playerVideo.value.volume = value
      }
      state.currentVolume = value
    }

    const changeTime = (value: number) => {
      if (playerVideo.value) {
        playerVideo.value.currentTime = value
      }
      state.currentTime = value
    }

    const timeUpdated = () => {
      if (playerVideo.value) {
        state.currentVolume = playerVideo.value?.volume ?? 0
        state.currentTime = playerVideo.value?.currentTime ?? 0
        state.duration = playerVideo.value?.duration ?? 0
      }
      state.progressTime = getProgressTime()
    }

    const requestFullScreen = () => {
      if (playerVideo.value) {
        playerVideo.value.requestFullscreen()
      }
    }

    const exitFullScreen = () => {
      if (playerVideo.value) {
        playerVideo.value.exitFullscreen()
      }
    }

    const timeFormated = computed(() => {
      return convertTime(state.currentTime)
    })

    const convertTime = (timeSeconds: number) => {
      var hour = 0
      var seconds = timeSeconds

      var hourFormated = hour < 10 ? '0' + hour : hour
      var secondsFormated = seconds < 10 ? '0' + seconds : seconds
      return hourFormated + ':' + secondsFormated
    }

    const getProgressTime = () => {
      const duration = playerVideo.value?.duration ?? 0
      const currentTime = playerVideo.value?.currentTime ?? 0
      return (currentTime / duration) * 100
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
      timeFormated,
      changeMuted,
      changeTime
    }
  }
})
</script>

<style>
#controls {
  display: none;
}

#player:hover #controls {
  display: flex;
}

video::-webkit-media-controls-enclosure {
  display: none !important;
}

video::-webkit-media-controls {
  display: none !important;
}
</style>>
