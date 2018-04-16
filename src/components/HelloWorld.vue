<template>
  <div class="hello">
    <input v-model="command" type="text" />

    <input v-model="width" type="text" class="width" />

    <div class="terminal" :style="{ 'width': width }">
      <div class="header">
        <div class="circles">
          <div class="red"></div>
          <div class="yellow"></div>
          <div class="green"></div>
        </div>
      </div>
      <div class="content" :class="{ 'dark': dark, 'light': ligth }">
        {{ command }}
      </div>
    </div>

    <a href="#">Download image</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      command: "npm instal --save axios",
      width: "400px",
      dark: true,
      light: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.terminal {
  margin: 30px auto;
}

.header {
  border-bottom: solid #b3b3b3;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  height: 25px;

  background: #e7e7e7; /* Old browsers */

  background: -moz-linear-gradient(
    top,
    #e7e7e7 0%,
    #b8b8b8 100%
  ); /* FF3.6-15 */

  background: -webkit-linear-gradient(
    top,
    #e7e7e7 0%,
    #b8b8b8 100%
  ); /* Chrome10-25,Safari5.1-6 */

  background: linear-gradient(
    to bottom,
    #e7e7e7 0%,
    #b8b8b8 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#e7e7e7",
      endColorstr="#b8b8b8",
      GradientType=0
    ); /* IE6-9 */
}

.circles {
  float: left;
  margin: 7px;
}

.circles div {
  float: left;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.circles div.red {
  border: solid #ef665d;
  background: #ef665d;
}

.circles div.yellow {
  border: solid #f5bf4c;
  background: #f5bf4c;
}

.circles div.green {
  border: solid #94c767;
  background: #94c767;
}

.content {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  min-height: 18px;
  padding: 10px;
  padding-left: 20px;
  font-size: 18px;
  font-family: cursive;
  color: #ccc;
  text-align: left;
}

.content.dark {
  background: #333;
}

.content.ligth {
  background: #f8f8f8;
}

input {
  width: 300px;
  border-radius: 6px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border: 3px solid rgba(0, 0, 0, 0.5);
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  margin: 10px;
  text-align: center;

  -webkit-box-shadow: 0px 0px 20px 2px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 20px 2px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 2px rgba(255, 255, 255, 1);
}

input.width {
  width: 100px;
}
</style>
