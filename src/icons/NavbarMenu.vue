<template>
  <icon :width="width" :height="height">
    <path d="M2,6H22V8H2V6M2,11H22V13H2V11M2,16H22V18H2V16Z" />
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