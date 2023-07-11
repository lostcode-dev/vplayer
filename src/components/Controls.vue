<template>
  <div id="controls" class="w-full flex bottom-0 absolute z-40 py-2 bg-slate-200">
    <button @click="isPaused ? $emit('pause') : $emit('play')" class="px-3 py-1">
      <i-play v-if="!isPaused" :width="20" :height="20" />
      <i-pause v-else :width="20" :height="20" />
    </button>
    <button @click="$emit('retro')" class="px-3 py-1">
      <i-rewind-ten :width="20" :height="20" />
    </button>
    <button @click="$emit('skip')" class="px-3 py-1">
      <i-fast-foward-ten :width="20" :height="20" />
    </button>
    <button class="btn-volume relative px-3 py-1">
      <input
        type="range"
        class="volume-input absolute rotate-[-90deg] max-w-[150px] origin-bottom"
        min="0"
        max="1"
        step="0.01"
        :value="volume"
        @input="changeVolume($event)"
      />
      <span @click="$emit('changeMuted')">
        <i-volume-mute v-if="isMuted" :width="20" :height="20" />
        <i-volume-off v-else-if="volume == 0" :width="20" :height="20" />
        <i-volume-low v-else-if="volume <= 0.3" :width="20" :height="20" />
        <i-volume-medium v-else-if="volume > 0.3 && volume <= 0.65" :width="20" :height="20" />
        <i-volume-high v-else :width="20" :height="20" />
      </span>
    </button>
    
    <div class="flex w-full justify-center items-center">
      <span>
        {{ timeFormated }}
      </span>

      <input
        type="range"
        class="current-time-input w-full mx-2"
        min="0"
        :max="duration"
        step="0.01"
        :value="currentTime"
        @input="changeTime($event)"
      />
    </div>

    <button @click="$emit('requestFullScreen')" class="px-3 py-1">
      <i-full-screen v-if="!isFullScreen" :width="20" :height="20" />
      <i-full-screen-exit v-else :width="20" :height="20" />
    </button>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    isPaused: {
      type: Boolean,
      default: false
    },
    isMuted: {
      type: Boolean,
      default: false
    },
    isFullScreen: {
      type: Boolean,
      default: false
    },
    timeFormated: {
      type: String,
      default: 0
    },
    volume: {
      type: Number,
      default: 0
    },
    progressTime: {
      type: Number,
      default: 0
    },
    currentTime: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const emit = defineEmits(['update:changeTime', 'update:changeVolume'])

    const changeTime = (event: Event) => {
      const inputValue = (event.target as HTMLInputElement).value;
      emit('update:changeTime', inputValue)
    }

    const changeVolume = (event: Event) => {
      const inputValue = (event.target as HTMLInputElement).value;
      emit('update:changeVolume', inputValue)
    }

    return {
      changeTime,
      changeVolume
    }
  }
}
</script>   

<style>
@media (min-width: 1024px) {
  .progress-bar {
    width: 100%;
    height: 5px;
    background-color: #ccc;
  }

  .volume-input {
    right: -110%;
    bottom: 337%;
  }

  .btn-volume:hover .volume-input,
  .volume-input:hover {
    visibility: visible;
  }

  .volume-input {
    visibility: hidden;
    transition: visibility 0.3s ease-out;
  }
}
</style>
