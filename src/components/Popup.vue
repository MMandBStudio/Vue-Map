<template>

</template>

<script>

import { mapMutations } from 'vuex';
import L from 'leaflet';

const events = [
  'add',
  'remove',
  'popupopen',
  'popupclose',
  'tooltipopen',
  'tooltipclose'
];

export default {
  props: {
    content: {
      type: String,
      custom: true,
      default: '',
    },
    heading: {
      type: String,
      custom: true,
      default: '',
    },
    link: {
      type: String,
      custom: true,
      default: '',
    },
    latlng: {
      type: Array,
    },
  },

  mounted() {
    if (this.latlng) {
      var popup = L.popup()
        .setLatLng(this.latlng)
        .setContent('<h3>'+this.heading+'</h3><p>'+this.content+'</p><p>'+this.link+'</p>');


      this.$nextTick(function () {
        this.openPopup(popup)
        events.forEach((event) => {
          popup.on({ event, func: (ev) => { this.$emit(event, ev) } })
        })
      });
    } else {
      this.$nextTick(function () {
        this.$parent.$marker.bindPopup('<h3>'+this.heading+'</h3><p>'+this.content+'</p><p>'+this.link+'</p>').openPopup();
      })
    }
  },

  methods: {
    ...mapMutations([
      'openPopup',
    ]),
  },
}
</script>
