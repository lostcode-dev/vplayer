<template>
  <svg
    class="inline"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :fill="currentColor"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 40
    },
    height: {
      type: Number,
      default: 40
    },
    currentColor: {
      type: String,
      default: 'currentColor'
    }
  },
  setup() {}
}
</script>