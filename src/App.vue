<template>
  <div id="app">
    <img src="./assets/Mac-Terminal-icon.png">
    <span class="logo">Tiny Terminal</span>
    <a class="github" href="https://github.com/felipeblini/terminal-generator">Terminal command generator</a>
    <h1>Terminal/Prompt Command Image Generator</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 80px;
  height: 80px;
  float: left;
  margin-right: 10px;
}

span.logo {
  display: block;
  height: 80px;
  color: #efefef;
  font-weight: bolder;
  font-size: 53px;
  font-family: "Anton", sans-serif;
  text-align: left;
}

a.github {
  display: block;
  text-indent: -9999px;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 80px;
  height: 80px;
  background: url("./assets/if_github_394189.png") center center no-repeat;
  background-size: 60px;
}

h1 {
  font-family: "Anton", sans-serif;
  margin-top: 60px;
}
</style>


<style>
html {
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
}
</style>