<template>
  <a class="theButton" @click="toggle" v-bind:class="{on : showMarkers }"></a>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'showMarkers'
      ])
    },

    methods: {
      ...mapMutations([
        'toggleMarkers',
        'setKey'
      ]),

      toggle: function() {
        console.log('toggle is '+this.showMarkers);
        this.toggleMarkers(this.showMarkers);
      }
    },
  }
</script>

<style lang="scss">
  .theButton {
    position: absolute;
    top: 75px;
    left: 10px;

    background-color: #fff;
    border-bottom: 1px solid #ccc;
    width: 26px;
    height: 26px;
    line-height: 26px;
    display: block;
    text-align: center;
    text-decoration: none;
    color: black;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.65);

    z-index: 5000;

    background-image: url("/static/img/show_marker_icons/ic_location_on_black_24px.svg");
    background-size: 20px;
    background-position: center center;
    background-repeat: no-repeat;

    &:hover {
      cursor: pointer;
    }

    &.on {
      background-image: url("/static/img/show_marker_icons/ic_location_off_black_24px.svg");
    }
  }
</style>
