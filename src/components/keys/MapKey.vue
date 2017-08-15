<template>
  <div class="map-key">
    <div class="row">
      <div class="img">IMG</div>
      <div class="text">main footpath</div>
    </div>
    <div class="row">
      <div class="img">IMG</div>
      <div class="text">secondary footpath</div>
    </div>
    <div class="row">
      <div class="img">IMG</div>
      <div class="text">desire lane</div>
    </div>
    <div class="row">
      <div class="img">IMG</div>
      <div class="text">easy going trail (wheelchair accessible)</div>
    </div>
    <div class="row">
      <div class="img">IMG</div>
      <div class="text">footbridge</div>
    </div>
    <div class="row">
      <div class="img">IMG</div>
      <div class="text">information board</div>
    </div>
    <div class="row">
      <div class="img">IMG</div>
      <div class="text">bench</div>
    </div>
    <div class="row">
      <div class="img">IMG</div>
      <div class="text">flush / saturated soil</div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .map-key {
    overflow-y: hidden;
    min-width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;

      .row {
        width: 100%;
        margin-left: 5px;
        margin-bottom: 5px;

        .img {
          display: inline-block;
          width: 15%;
          height: 100%;
        }
        .text {
          display: inline-block;
          width: 80%;
          height: 100%;
        }
      }
  }
</style>
