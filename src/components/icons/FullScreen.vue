<template>
  <icon :width="width" :height="height">
    <path
      d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"
      fill="currentColor"
    />
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


