<template>
  <div id="app">
    <div class="page-header">
      <div class="logo">
        <img src="./assets/Mac-Terminal-icon.png">
        <span class="logo">Tiny Terminal</span>
      </div>
      <a class="github" href="https://github.com/felipeblini/terminal-generator">Terminal command generator</a>
    </div>
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

.page-header {
  height: 60px;
  display: flex;
  justify-content: center;
}

@media (min-width: 580px) {
  .page-header {
    height: 80px;
  }
}

div.logo {
  display: flex;
  flex-grow: 1;
}

img {
  width: 55px;
  height: 55px;
  margin: 0 10px 0 3px;
}

@media (min-width: 580px) {
  img {
    width: 80px;
    height: 80px;
  }
}

span.logo {
  height: 60px;
  color: #efefef;
  font-weight: bolder;
  font-size: 26px;
  font-family: "Anton", sans-serif;
  position: relative;
  top: 8px;
}

@media (min-width: 580px) {
  span.logo {
    position: initial;
    top: initial;
    height: 80px;
    font-size: 53px;
  }
}

a.github {
  text-indent: -9999px;
  outline: none;
  width: 56px;
  height: 56px;
  background: url("./assets/if_github_394189.png") center center no-repeat;
  background-size: 40px;
  align-self: right;
}

@media (min-width: 580px) {
  a.github {
    width: 80px;
    height: 80px;
    background-size: 60px;
  }
}

h1 {
  font-family: "Anton", sans-serif;
}

body {
  margin-bottom: 50px;
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