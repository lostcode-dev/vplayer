<template>
      <div class="progress-bar">
        <div class="progress" :style="`width:${progressTime}%;`"></div>
      </div>
</template>

<script>
export default {
  components: {  },
  props: {
    progressTime: {
      type: Number,
      default: 0
    }
  },
  setup() {}    
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #ccc;
  }

  .progress {
    height: 100%;
    width: 0;
    background-color: #ff0000;
    transition: width 0.3s ease;
  }
}
</style>
