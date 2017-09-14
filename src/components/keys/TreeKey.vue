<template>
  <div class="map-key">
      <p class="icon standing-dead">Standing dead wood / habitat tree</p>
      <p class="icon active">Active coppice</p>
      <p class="icon notable">Notable Tree</p>
      <p class="icon possible" style="padding-bottom: 15px">Possible Veteran</p>
      <p>A.c. field maple (Acer campestre)</p>
      <p>A.g. alder (Alnus glutinosa)</p>
      <p>A.h. horse chestnut (Aesculus hippocastanum)</p>
      <p>A.p. sycamore (Acer pseudoplatanus)</p>
      <p>A.pl. Norway maple (Acer platanoides)</p>
      <p>B. spp. downy & silver birches (Betula pubescens &  B. pendula)</p>
      <p>C.a. hazel (Coryllus avelana)</p>
      <p>C.b. hornbeam (Carpinus betulus)</p>
      <p>C.m. hawthorn (Crataegus monogyna)</p>
      <p>C.s. sweet chestnut (Castanea sativa)</p>
      <p>F.e. ash (Fraxinus excelsior)</p>
      <p>F.s. beech (Fagus sylvatica)</p>
      <p>H.h. ivy (Hedera helix)</p>
      <p>I.a. holly (Ilex aquifolium)</p>
      <p>L.d. European larch (Larix decidua)</p>
      <p>P.a. wild cherry (Prunus avium)</p>
      <p>P.h. London plane (Platanus hispanica)</p>
      <p>P.m. Douglas fir (Pseudotsuga menziesii)</p>
      <p>P.s. Scot’s pine (Pinus sylvestris)</p>
      <p>Q. spp. English & sessile oaks (Quercus robur & Q. petraea) </p>
      <p>S.spp. willows (Salix species)</p>
      <p>S.a. rowan (Sorbus aucuparia)</p>
      <p>S.ar. whitebeam (Sorbus aria)</p>
      <p>S.n. elder (Sambucus nigra)</p>
      <p>T.spp. lime (Tilia species)</p>
      <p style="padding-bottom: 45px">T.b. yew (Taxus baccata)</p>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .map-key {
    overflow: hidden;
    min-width: 200px;
    padding-top: 5px;
    margin-right: 5px;
    padding-bottom: 5px;

    p {
      margin: 2px;
      margin-left: 10px;
      padding: 0;

      &.title {
        margin: 5px;
      }

      &.icon {
        margin-left: 5px;
      }
    }

    .icon {
      padding-left: 35px;
      background-size: 30px;
      background-position: top 3px left;
      background-repeat: no-repeat;

      &.standing-dead {
        background-image: url("/static/img/key_assets/trees/keytree-standing-dead-wood.png");
      }
      &.active {
        background-image: url("/static/img/key_assets/trees/keytree-active-coppice.png");
      }
      &.notable {
        background-image: url("/static/img/key_assets/trees/keybb-notable-tree.png");
      }
      &.possible {
        background-image: url("/static/img/key_assets/trees/keybb-possible-veteran.png");
      }
    }
  }
</style>
