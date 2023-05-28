<template>
  <button
    class="transition-all"
    :class="`text-${fontSize} text-${color} text-${textAlign} rounded-${radius} px-${paddingSize} py-${Math.round(paddingSize / 2)} font-${fontWeight} ${backgroundColor}`"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    radius: {
      type: String,
      default: 'lg'
    },
    fontWeight: {
      type: String,
      default: 'semibold'
    },
    paddingSize: {
      type: Number,
      default: 4
    },
    backgroundColor: {
      type: String,
      default: 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:to-teal-500 hover:from-emerald-500'
    },
    fontSize: {
      type: String,
      default: 'base'
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  components: {},
  setup() {}
}
</script>
