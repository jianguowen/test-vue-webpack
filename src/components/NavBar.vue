<style lang="less">
ul.navbar-container{
  position:relative;
  width:100vw;
  height:44px;
  background-color: #F2F2F2;
  line-height: 44px;
  &.flex-wrap{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  &.row-flex{
    box-orient:horizontal;
    box-direction:normal;
    box-lines:multiple;
    flex-flow: row wrap;
  }
  li.item{
    flex: 1;
    text-align: center;
  }
  a{
    color:#000;
    text-decoration: none;
    font-size: 14px;
    &.active{
      color:#21b100;
    }
  }
}
</style>
<template>
  <div>
    <ul class="flex-wrap row-flex navbar-container">
      <li class="item"><a href="" v-link="{ path: '/base' }">基础篇</a></li>
      <li class="item"><a href="" v-link="{ path: '/middle' }">中级篇</a></li>
      <li class="item"><a href="" v-link="{ path: '/high' }">高级篇</a></li>
      <li class="item"><a href="" v-link="{ path: '/tools' }">工具</a></li>
      <li class="item"><a href="" v-link="{ path: '/cli' }">Cli</a></li>
    </ul>
  </div>
</template>

<script></script>
