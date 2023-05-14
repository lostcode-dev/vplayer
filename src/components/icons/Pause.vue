<template>
  <icon :width="width" :height="height">
    <path d="M14,19H18V5H14M6,19H10V5H6V19Z" fill="currentColor" />
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