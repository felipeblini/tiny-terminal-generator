<template>
  <div id="app">
    <img src="./assets/Mac-Terminal-icon.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* html {
    height: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background: rgba(90, 90, 164, 1);
    background: -moz-linear-gradient(
      top,
      rgba(90, 90, 164, 1) 0%,
      rgba(162, 121, 156, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      left bottom,
      color-stop(0%, rgba(90, 90, 164, 1)),
      color-stop(100%, rgba(162, 121, 156, 1))
    );
    background: -webkit-linear-gradient(
      top,
      rgba(90, 90, 164, 1) 0%,
      rgba(162, 121, 156, 1) 100%
    );
    background: -o-linear-gradient(
      top,
      rgba(90, 90, 164, 1) 0%,
      rgba(162, 121, 156, 1) 100%
    );
    background: -ms-linear-gradient(
      top,
      rgba(90, 90, 164, 1) 0%,
      rgba(162, 121, 156, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(90, 90, 164, 1) 0%,
      rgba(162, 121, 156, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr="#5a5aa4",
        endColorstr="#a2799c",
        GradientType=0
      );
  } */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
