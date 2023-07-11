<template>
  <icon :width="width" :height="height">
    <path d="M7,9V15H11L16,20V4L11,9H7Z" fill="currentColor" />
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


