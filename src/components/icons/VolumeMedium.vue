<template>
  <icon :width="width" :height="height">
    <path 
      d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
      fill="currentColor"
    />
  </icon>
</template>

<script lang="ts">
import Icon from './Icon.vue'
export default {
  components: { Icon },
  props: {
    width: Number,
    height: Number
  },
  setup() {}
}
</script>


