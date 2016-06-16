<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #FFF;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

<template>
<div>
  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>
</div>
</template>
