<template>
<div>
  <h1>Tools</h1>
  <nav-bar><nav-bar>
</div>
</template>

<script>
import Vue from 'vue';
import NavBar from '../components/NavBar';

export default {
  ready() {
    console.log(Vue);
  },
  components: {
    NavBar,
  },
};
</script>
