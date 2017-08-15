<template>
  <div class="tiles-select">
    <button v-on:click="change('none')">None</button>
    <button v-on:click="change('bluebell')">Bluebells</button>
    <button v-on:click="change('wildflower')">Wild Flowers</button>
    <button v-on:click="change('tree')">Trees</button>
  </div>
</template>

<script>
  var map = 'none'

  export default {

    data() {
      return {
        map
      };
    },

    methods: {
      change(m) {
        this.map = m
        this.$emit('map', this.map)
      }
    }
  }
</script>

<style lang="scss">
  .tiles-select {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 5000;
  }
</style>
