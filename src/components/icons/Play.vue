<template>
  <icon :width="width" :height="height">
    <path d="M8,5.14V19.14L19,12.14L8,5.14Z" fill="currentColor" />
  </icon>
</template>

<script>
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