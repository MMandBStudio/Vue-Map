<template>
  <div>
    <l-key></l-key>
    <l-tile-select ref="selectTile" v-on:map="changeUrl"></l-tile-select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import L from 'leaflet';
import LTileSelect from './TileSelect.vue';
import LKey from './Key.vue';

export default {

  data() {
    return {
      tilelayer: L.tileLayer(this.url, { attribution: this.attribution })
    }
  },

  props: {
    url: {
      type: String,
    },
    attribution: {
      type: String,
    },
  },

  mounted() {
    this.$nextTick(function () {
      this.addLayer(this.tilelayer);
    });
  },

  components: {
    LTileSelect,
    LKey
  },

  methods: {
    ...mapMutations([
      'addLayer'
    ]),
    changeUrl: function(e) {
      this.tilelayer.setUrl('/static/assets/tiles/'+e+'/{z}/{x}/{y}.png')
    }
  },

};

</script>
