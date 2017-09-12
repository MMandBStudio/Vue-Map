<template>
  <div class="map-key">
      <p class="title">2000 honeysuckle survey</p>
      <p class="icon honey">honeysuckle (Lonicera periclymenum)</p>

      <p class="title">2001 wildflower survey</p>
      <p class="icon anemone">wood anemone (Anemome nemorosa)</p>
      <p class="icon golden">golden saxifrage (Chrysosplenium oppositifolium)</p>
      <p class="icon sorrel">wood sorrel (Oxalis acetosella)</p>
      <p class="icon lesser">lesser celandine (Ranunculus ficaria)</p>
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
      margin: 2px;
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

      &.honey {
        background-image: url("/static/img/key_assets/wild-flowers/keywf-honeysuckle.jpg");
      }
      &.anemone {
        background-image: url("/static/img/key_assets/wild-flowers/keywf-wood-anemone.jpg");
      }
      &.golden {
        background-image: url("/static/img/key_assets/wild-flowers/keywf-golden.jpg");
      }
      &.sorrel {
        background-image: url("/static/img/key_assets/wild-flowers/keywf-wood-sorrel.jpg");
      }
      &.lesser {
        background-image: url("/static/img/key_assets/wild-flowers/keywf-lesser.jpg");
      }
    }
  }
</style>
