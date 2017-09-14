<template>
  <div class="more-info"
       v-bind:style="{ borderColor: borderColour }">

      <div class="controls"
           @click="open = !open"
           v-bind:style="{ backgroundColor: borderColour }">
          <p class="control-text">TOGGLE&nbsp;&nbsp;KEY&nbsp;&nbsp;ON&nbsp;/&nbsp;OFF</p>
      </div>

      <transition
          v-on:enter="show"
          v-on:leave="hide"
          v-bind:css="false">
          <div v-if="open" class="content">
              <div class="header"
                   v-bind:style="{ backgroundColor: borderColour }">
                  <span class="header-text">{{keyString}} Key</span>
              </div>
              <div class="scrolling" v-if="key == 0">
                  <map-key></map-key>
              </div>
              <div class="scrolling" v-else-if="key === 1">
                <bluebell-key></bluebell-key>
              </div>
              <div class="scrolling" v-else-if="key === 2">
                <wild-flower-key></wild-flower-key>
              </div>
              <div class="scrolling" v-else-if="key === 3">
                <tree-key></tree-key>
              </div>
          </div>
      </transition>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { mapGetters } from 'vuex';
  import Velocity from 'velocity-animate'
  import MapKey from './keys/MapKey.vue'
  import WildFlowerKey from './keys/WildFlowerKey.vue'
  import BluebellKey from './keys/BluebellKey.vue'
  import TreeKey from './keys/TreeKey.vue'

  export default {
    computed: {
      ...mapGetters([
        'key',
        'keyString',
        'borderColour'
      ])
    },

    data() {
      return {
        open: false
      };
    },

    components: {
      MapKey,
      WildFlowerKey,
      BluebellKey,
      TreeKey
    },

    methods: {
      show: function (el, done) {
          Velocity(el, { width: "220px" }, { duration: 300, easing: "linear", complete: done })
      },
      hide: function (el, done) {
        Velocity(el, {width: "0"}, {duration: 300, easing: "linear", complete: done})
      },
    },
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
    opacity: 1;
    max-width: 240px;
    min-width: 15px;
    overflow-y: hidden;
    border: 2px solid #afdffd;

    .content {
      padding-left: 15px;
      height: 100%;

      .scrolling {
        height: 100%;
        margin-bottom: 10px;
        overflow-y: scroll;
      }

      .header {
        height: 30px;
        background-color: #70C5FB;
        min-width: 200px;

        .header-text {
          color: #000;
          padding: 5px;
          margin: 0;
          font-size: 20px;
          font-weight: bold;
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
        text-align: center;
        font-weight: bold;
        top: 65%;
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
