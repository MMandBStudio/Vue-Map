<template>
  <div>
    <l-toggle></l-toggle>
    <l-key ref="theKey"></l-key>
    <l-tile-select ref="selectTile" v-on:map="changeUrl"></l-tile-select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';
import L from 'leaflet';
import LTileSelect from '../custom/TileSelect.vue';
import LKey from '../custom/Key.vue';
import LToggle from '../custom/ToggleMarkerButton.vue';

export default {

  data() {
    return {
      tilelayer: L.tileLayer(this.url, { attribution: this.attribution }),
      key: LKey
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
    LKey,
    LToggle
  },

  methods: {
    ...mapMutations([
      'addLayer',
      'setKey',
      'setBorderColour'
    ]),
    changeUrl: function(e) {
      this.tilelayer.setUrl('/static/assets/tiles/'+e+'/{z}/{x}/{y}.png')
      this.setKey(e)
      this.setBorderColour(e)
    }
  },
};
</script>
