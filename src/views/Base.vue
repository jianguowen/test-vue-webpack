<template>
<div>
  <gallery></gallery>
  <nav-bar><nav-bar>
</div>
</template>

<script>
import Vue from 'vue';
import NavBar from '../components/NavBar';
import Gallery from '../components/Gallery';

export default {
  ready() {
    console.log(Vue);
  },
  components: {
    NavBar,
    Gallery,
  },
};
</script>
