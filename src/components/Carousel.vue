<style>

</style>

<template>
  <div class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators" v-show="indicators">
      <indicator :indicator.sync="indicator" :active-index.sync="activeIndex" :is-animating.sync="isAnimating"></indicator>
    </ul>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <slot></slot>
    </div>
    <!-- Controls -->
    <div v-show="controls" class="carousel-controls hidden-xs">
      <a class="left carousel-control" role="button" @click="prevClick">
        <span class="fa fa-arrow-left" aria-hidden="true"></span>
      </a>
      <a class="right carousel-control" role="button" @click="nextClick">
        <span class="fa fa-arrow-right" aria-hidden="true"></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      indicators: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      controls: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      interval: {
        type: Number,
        default: 5000
      }
    },
  }
</script>
