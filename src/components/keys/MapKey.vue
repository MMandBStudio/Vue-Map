<template>
  <div class="map-key">
      <p class="icon main-path">Main footpath</p>
      <p class="icon second-path">Secondary footpath</p>
      <p class="icon desire-line">Desire Line</p>
      <p class="icon easy-trail">Easy going trail (wheelchair accessible)</p>
      <p class="icon footbridge">Footbridge</p>
      <p class="icon info">Information board</p>
      <p class="icon bench">Bench</p>
      <p class="icon flush">Flush / Saturated soil</p>
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

      &.main-path {
        background-image: url("/static/img/key_assets/standard/keymap-main-footpath.png");
      }
      &.second-path {
        background-image: url("/static/img/key_assets/standard/keymap-secondary-footpath.png");
      }
      &.desire-line {
        background-image: url("/static/img/key_assets/standard/keymap-desire-line.png");
      }
      &.easy-trail {
        background-image: url("/static/img/key_assets/standard/keymap-easy-going-trail.png");
      }
      &.footbridge {
        background-image: url("/static/img/key_assets/standard/keymap-footbridge.png");
      }
      &.info {
        background-image: url("/static/img/key_assets/standard/keymap-information-board.png");
      }
      &.bench {
        background-image: url("/static/img/key_assets/standard/keymap-bench.png");
      }
      &.flush {
        background-image: url("/static/img/key_assets/standard/keymap-flush-saturated-soil.png");
      }
    }
  }
</style>
