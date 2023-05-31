<template>
  <button
    class="transition-all"
    :class="`text-${fontSize} text-${color} text-${textAlign} rounded-${radius} px-${paddingSize} py-${Math.round(paddingSize / 2)} font-${fontWeight} ${backgroundColorClass} `"
    
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineEmits } from 'vue';
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
    },
    activeButton: {
      type: Boolean,      
      default: undefined,
    }
  },
  components: {},
  setup(props) {
    const emit = defineEmits(['click'])

    const handlerClick = () => {
      emit('click')
    }

    const backgroundColorClass = computed(() => {
      if (props.activeButton === undefined) {
        return props.backgroundColor
      }
      if (props.activeButton) {
        return 'bg-blue-500 text-white';
      } else {
        return "";
      }
    })

    return {
      handlerClick,
      backgroundColorClass
    }
  }
}
</script>
