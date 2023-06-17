<template>
  <icon :width="width" :height="height">
    <path d="M4.22,3L12,10.78L19.78,3L21,4.22L13.22,12L21,19.78L19.78,21L12,13.22L4.22,21L3,19.78L10.78,12L3,4.22L4.22,3Z" />
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