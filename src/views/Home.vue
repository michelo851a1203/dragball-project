<template>
  <div class="home">
    <div
      @mousedown.prevent="startdrag"
      @touchstart="startdrag"
      @touchmove="drag"
      @mousemove="drag"
      @touchend="enddrag"
      @mouseup="enddrag"
      @mouseleave="enddrag"
      ref="ball"
      class="w-32 h-32 relative rounded-full bg-blue-500"
    ></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      isdragging: false,
      position: {
        x: 0,
        y: 0,
        dx: "",
        dy: "",
        nX: "",
        nY: "",
        xPum: "",
        yPum: "",
      },
    };
  },
  methods: {
    startdrag(event) {
      const targetObj = this.$refs.ball;
      this.isdragging = true;
      let touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }

      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.position.dx = targetObj.offsetLeft;
      this.position.dy = targetObj.offsetTop;
    },
    drag() {
      if (this.isdragging === true) {
        const targetObj = this.$refs.ball;
        let touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.position.nx = touch.clientX - this.position.x;
        this.position.ny = touch.clientY - this.position.y;
        this.position.xPum = this.position.dx + this.position.nx;
        this.position.yPum = this.position.dy + this.position.ny;
        targetObj.style.left = this.position.xPum + "px";
        targetObj.style.top = this.position.yPum + "px";
        document.addEventListener(
          "touchmove",
          function (event) {
            event.preventDefault();
          },
          false
        );
      }
    },
    enddrag() {
      this.isdragging = false;
    },
  },
};
</script>

