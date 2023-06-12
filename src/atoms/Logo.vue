<template>
  <div
    class="keyframe-logo snappy w-embed animate__animated animate__backInLeft"
    style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px)"
  >
    <svg
      class="keyframe-logo-svg animate__animated"
      width="160"
      height="64"
      viewBox="0 0 160 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="{ 'animate__jello': animatedJello }"
      @mouseover="animatedJello = true"
      @mouseout="animatedJello = false"
    >
      <path
        d="M16 25.3333L6.75 34.5833L16.3333 44.3333H12L3.33333 35.3099V44.3333H0V18H3.33333V33.7042L11.6667 25.3333H16Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
      <path
        d="M69.3333 18C63.3333 18 61 20.1722 61 25.3333H58V28.3333H61V44.3333H64.3333V28.3333H69.3333V25.3333H64.3333C64.3333 22.1602 65.6667 21 69.3333 21V18Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M84.3333 34.8333C84.3333 29.2184 88.8851 24.6667 94.5 24.6667C99 24.6667 101.333 28 101.333 28V25.3333H104.667V44.3333H101.333V41.6667C101.333 41.6667 99 45 94.5 45C88.8851 45 84.3333 40.4482 84.3333 34.8333ZM94.5833 41.6667C98.3573 41.6667 101.417 38.6073 101.417 34.8333C101.417 31.0594 98.3573 28 94.5833 28C90.8094 28 87.75 31.0594 87.75 34.8333C87.75 38.6073 90.8094 41.6667 94.5833 41.6667Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M160 34.8333C160 29.2184 155.448 24.6667 149.833 24.6667C144.218 24.6667 139.667 29.2184 139.667 34.8333C139.667 40.4482 144.218 45 149.833 45C154.092 45 157.739 42.3815 159.253 38.6667H155.491C154.262 40.4772 152.187 41.6667 149.833 41.6667C146.575 41.6667 143.849 39.3857 143.165 36.3333H159.89C159.963 35.8438 160 35.343 160 34.8333ZM143.165 33.3333C143.849 30.2809 146.575 28 149.833 28C153.092 28 155.818 30.2809 156.502 33.3333H143.165Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
      <path
        d="M123.229 28.0078C124.568 25.8287 126.557 24.7582 129.235 24.7582C133.52 24.7582 136.333 27.7402 136.333 32.4808V44.3333H133V32.5955C133 29.6518 131.454 27.9314 128.891 27.9314C126.021 27.9314 124.167 29.8047 124.167 33.7424V44.3333H120.833V32.5955C120.833 29.6518 119.288 27.9314 116.802 27.9314C114.009 27.9314 112 29.8811 112 33.7424V44.3333H108.667V25.3333H112V27.8167C113.301 25.7905 115.118 24.7582 117.605 24.7582C120.168 24.7582 122.043 25.8287 123.229 28.0078Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
      <path
        class="keyframe-diamond animate__animated"
        :class="{ 'animate__bounce': animatedBounce }"
        d="M84.0021 28.3312L80.6667 25L77.3333 28.3312L80.6667 31.6667L84.0021 28.3312Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
      <path
        d="M72.6667 25.3333H76V44.3333H72.6667V25.3333Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
      <path
        d="M40.8333 25.3333L47.6667 40.3333L53.1667 25.3333H56.6667L47 50H43.6667L46 44.3333L37.3333 25.3333H40.8333Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.1667 24.6667C32.7816 24.6667 37.3333 29.2184 37.3333 34.8333C37.3333 35.343 37.2958 35.8438 37.2234 36.3333H20.4985C21.1821 39.3857 23.908 41.6667 27.1667 41.6667C29.5199 41.6667 31.5952 40.4772 32.8243 38.6667H36.5859C35.0725 42.3815 31.4254 45 27.1667 45C21.5518 45 17 40.4482 17 34.8333C17 29.2184 21.5518 24.6667 27.1667 24.6667ZM27.1667 28C23.908 28 21.1821 30.2809 20.4985 33.3333H33.8348C33.1512 30.2809 30.4253 28 27.1667 28Z"
        fill="#2C3E50"
        shape-rendering="geometricPrecision"
      ></path>
    </svg>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const animatedJello = ref(false)
const animatedBounce = ref(false)

setInterval(() => {
  animatedBounce.value = !animatedBounce.value
  console.log(animatedBounce.value)
}, 3000);

</script>

<style scoped>
.keyframe-logo {
  width: 200px;
  height: 64px;
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: visible;
}
</style>