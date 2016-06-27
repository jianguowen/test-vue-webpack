<template>
<div>
  <gallery></gallery>
  <nav-bar><nav-bar>
</div>
</template>

<script>
import Vue from 'vue';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

export default {
  ready() {
    console.log(Vue);
  },
  components: {
    NavBar,
    Carousel,
  },
};
</script>
