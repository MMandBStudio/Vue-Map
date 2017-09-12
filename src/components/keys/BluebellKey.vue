<template>
  <div class="map-key">
      <p class="title">2012 English bluebell survey (Hyacinthoides non-scripta)</p>
      <p class="icon under100">dominant: 80 -100%</p>
      <p class="icon under80">abundant: 60 - 80% </p>
      <p class="icon under60">frequent: 40 -60%</p>
      <p class="icon under40">occasional: 20 - 40%</p>
      <p class="icon under20">rare: 1 - 20%</p>
      <p class="icon none">not surveyed</p>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .map-key {
    overflow-y: hidden;
    min-width: 200px;
    padding-top: 5px;
    padding-bottom: 5px;

    p {
      margin: 4px;
      margin-left: 5px;
      padding: 0;

      &.title {
        margin: 5px;
      }
    }

    .icon {
      padding-left: 35px;
      background-size: 30px;
      background-position: top 3px left;
      background-repeat: no-repeat;

      &.none {
        background-image: url("/static/img/key_assets/bluebell/keybb-notsurveyed.jpg");
      }
      &.under20 {
        background-image: url("/static/img/key_assets/bluebell/keybb-1-20.jpg");
      }
      &.under40 {
        background-image: url("/static/img/key_assets/bluebell/keybb-20-40.jpg");
      }
      &.under60 {
        background-image: url("/static/img/key_assets/bluebell/keybb-40-60.jpg");
      }
      &.under80 {
        background-image: url("/static/img/key_assets/bluebell/keybb-60-80.jpg");
      }
      &.under100 {
        background-image: url("/static/img/key_assets/bluebell/keybb-80-100.jpg");
      }
    }
  }
</style>
