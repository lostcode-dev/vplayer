<template>
  <button
    class="transition-all"
    :class="`text-${fontSize} text-${currentColor} text-${textAlign} rounded-${radius} px-${paddingSize} py-${Math.round(paddingSize / 2)} font-${fontWeight} ${backgroundColorClass} `"
    @click="toggleButton"
    
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineEmits, ref } from 'vue';
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
  emits: ["click"],
  setup(props, {emit}) {
    
    const toggleButton = () => {      
      emit('click', !props.activeButton);
    };

    const currentColor = computed( () => {
      if (props.activeButton === undefined || props.activeButton ) {
        return props.color
      } else {
        return 'black'
      }
    })
    const backgroundColorClass = computed(() => {
      if (props.activeButton === undefined) {
        return props.backgroundColor;
      } else if (props.activeButton) {
        return props.backgroundColor;
      } 
    });
    return {      
      toggleButton,
      backgroundColorClass,
      currentColor,
    }
  }
}
</script>
