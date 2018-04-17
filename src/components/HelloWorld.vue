<template>
  <div class="hello">
    <div v-if="!generated">
      <h4>Window sixe in pixels</h4>
      <input v-model="width" type="number" class="width" /> x
      <input v-model="height" type="number" class="width" />

      <div class="terminal" :style="{ 'width': width + 'px' }">
        <div class="header">
          <div class="circles">
            <div class="red"></div>
            <div class="yellow"></div>
            <div class="green"></div>
          </div>
        </div>
        <div class="content" :style="{ 'height': height + 'px' }" :class="{ 'dark': dark, 'light': light }">
          <textarea ref="textarea" rows="4" :style="{ 'height': height - 10 + 'px', 'width': width - 40 + 'px' }" v-model="command"></textarea>
        </div>
      </div>
    </div>

    <div v-if="generating">working...</div>

    <h3 style="color: #fff" v-if="generated">Right click in the image bellow and "Save image as..."</h3>
    <div :class="{ hidden: !generated }">
      <canvas ref="tutorial" id="tutorial">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <br>
    </div>

    <button v-if="!generated" @click="drawnCanvas">Generate image</button>
    <button v-else @click="goBack">Back</button>
  </div>
</template>

<script>
import { _roundedRect, _circle } from "./canvasHelper";

const _headerBarHeigth = 25;
const _canvasPad = 10;

export default {
  name: "HelloWorld",
  data() {
    return {
      command: "npm instal --save axios",
      width: Math.round(window.innerWidth * 60 / 100),
      height: 200,
      dark: true,
      light: false,
      generating: false,
      generated: false
    };
  },
  computed: {
    computedHeight: function() {
      return Number(this.height) + _canvasPad + _headerBarHeigth;
    },
    computedWidth: function() {
      return Number(this.width) + _canvasPad;
    }
  },
  methods: {
    drawnCanvas() {
      this.generating = true;
      console.log("generating", this.generating);
      var canvas = this.$refs.tutorial;

      if (canvas.getContext) {
        canvas.width = this.computedWidth;
        canvas.height = this.computedHeight;

        const ctx = canvas.getContext("2d");

        // the header bar
        let lingrad = ctx.createLinearGradient(0, 10, 0, 150);
        lingrad.addColorStop(0, "#E6E6E6");
        lingrad.addColorStop(0.3, "#BCBCBC");

        _roundedRect(
          ctx,
          10,
          10,
          this.width - _canvasPad * 2,
          _headerBarHeigth,
          8,
          8,
          8,
          0,
          0,
          lingrad
        );

        //red circle
        _circle(ctx, "#EF665D", 15, 13, 7, 0, Math.PI * 2, true, _canvasPad);

        //yellow circle
        _circle(ctx, "#F5BF4C", 35, 13, 7, 0, Math.PI * 2, true, _canvasPad);

        //green circle
        _circle(ctx, "#94C767", 55, 13, 7, 0, Math.PI * 2, true, _canvasPad);

        // the content
        _roundedRect(
          ctx,
          _canvasPad,
          _headerBarHeigth + _canvasPad,
          this.width - _canvasPad * 2,
          this.height - _canvasPad,
          8,
          0,
          0,
          8,
          8,
          "#333"
        );

        ctx.fillStyle = "#efefef";
        ctx.font = "20px cursive";
        ctx.fillText(
          this.command,
          _canvasPad + 10,
          _canvasPad + _headerBarHeigth + 30
        );
      }

      this.generating = false;
      this.generated = true;
    },
    goBack() {
      this.generated = false;
    }
  },
  mounted() {
    this.$refs.textarea.focus();
  }
};
</script>

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
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  margin: 10px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 1);
}
input.width {
  width: 100px;
  outline: none;
}
textarea {
  background: transparent;
  border: none;
  color: #efefef;
  outline: none;
  appearance: none;
  resize: none;
  font-family: cursive;
  font-size: 18px;
}
button {
  border: solid 1px #2c3e50;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 25px;
  cursor: pointer;
  outline: none;
}
.hidden {
  display: none;
}
h4 {
  margin-bottom: 5px;
}
</style>
