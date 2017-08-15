<template>
  <div class="more-info">
      <div class="controls" @click="open = !open"><p class="control-text">KEY</p></div>
      <transition
        v-on:enter="show"
        v-on:leave="hide"
        v-bind:css="false"
      >
      <div v-if="open" class="content">
        <div class="header">
          <span class="header-text">{{headerText}}</span>
        </div>
        <map-key></map-key>

      </div>
    </transition>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'
  import MapKey from './keys/MapKey.vue'

  export default {
    data() {
      return {
        open: true,
        headerText: 'Map Key'
      };
    },

    components: {
      MapKey
    },

    methods: {
      show: function (el, done) {
        console.log('showing');
          Velocity(el, { width: "200px" }, { duration: 600, easing: "linear", complete: done })
      },
      hide: function (el, done) {
        console.log('hiding');
        Velocity(el, {width: "0"}, {duration: 600, easing: "linear", complete: done})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .more-info {
    position: absolute;
    top: 10px;
    right: 0;
    height: 80%;
    z-index: 5000;
    background-color: #E5E5E5;
    opacity: 0.8;
    max-width: 220px;
    min-width: 15px;

    .content {
      padding-left: 15px;
      .header {
        background-color: #70C5FB;
        min-width: 100%;

        .header-text {
          color: #000;
          padding: 5px;
          margin: 0;
          font-size: 20px;
          font-weight: 800;
        }
      }
    }

    .controls {
      position: absolute;
      opacity: 10;
      width: 15px;
      height: 100%;
      background-color: #70C5FB;
      top: 0;
      left: 0;

      .control-text {
        transform: rotate(270deg);
        transform-origin: left top 0;
        position: relative;
        top: 50%;
        left: -1px;
      }

      &:hover {
        cursor: pointer;
      }
    }
    *, *::after, *::before {
      box-sizing: inherit;
    }

  }
</style>
