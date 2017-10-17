<template lang="html">
<div class="full">
  <l-map :zoom="zoom" :center="center" :min-zoom="minZoom" :max-zoom="maxZoom"
    :attributionControl="attributionControl" :zoomend="zoomend">
    <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>

    <l-marker :position="offMapMarker" :title="title" :opacity="opacity" :draggable="draggable">
      <l-tooltip content="find lat lang"></l-tooltip>
    </l-marker>

    <span v-if="showMarkers">
      <l-marker v-for="m in markers" :position="m.coords" :title="title" :opacity="opacity" :draggable="false">
        <l-popup :heading="m.heading" :content="m.content" :link="m.link"></l-popup>
      </l-marker>
    </span>

  </l-map>
</div>
</template>

<script>
import '../node_modules/leaflet/dist/leaflet.css';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'showMarkers'
    ])
  },

  data() {
    return {
      zoom: 2,

      center: [50.00, -30.0],
      offMapMarker: [52.908902047770255, 163.82812500000003],
      markers: [
        { coords:[49.0378679453,-62.2265625],
          heading:"Multistem hazel - Bracken Moorland",
          content:"Hazel (Corylus avellana) is an understory shrub that grows in the dappled shade of taller trees.  This example has been coppiced, a traditional process where a tree is cut back to encourage the regrowth of many smaller stems, which were traditionally used in furniture making and thatched roofing.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/multistem-hazel/' target='_blank'>View Resource ></a>"},
        { coords:[45.0890355648,-2.98828125],
          heading:"Wild Strawberry - Bracken Moorland",
          content:"The wild or woodland strawberry (Fragaria vesca) looks like a smaller version of the cultivated variety. The population of this species is now increasing here after selected trees were felled and the shrub layer cleared a few years ago, allowing more light to reach the ground. ",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/wild-strawberry/' target='_blank'>View Resource ></a>"},
        { coords:[77.3125199382,2.109375],
          heading:"Tree survey, Wood 1: sweet chestnut",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-1-sweet-chestnut/' target='_blank'>View Resource ></a>"},
        { coords:[48.3416461724,-46.0546875],
          heading:"Tangled vegetation - Dan Sumption",
          content:"To succeed among all the other vegetation bluebell bulbs (Hyacinthoides non-scripta) must produce their leaves early in the year, before the deciduous tree canopy closes over and light levels drop.  This successful strategy means that bluebells are the dominant plant in many areas of the wood.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tangled-vegetation/' target='_blank'>View Resource ></a>"},
        { coords:[45.583289756,-36.9140625],
          heading:"Beech and sweet chestnut - Dan Sumption",
          content:"This part of the wood is a mix of sweet chestnut (Castanea sativa), on the left, and beech (Fagus sylvatica), the lower branches of which are seen.  Neither of these trees are native to northern Britain: sweet chestnut was introduced from southern Europe, whereas beech originally grew only in southern Britain.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/beech-sweet-chestnut/' target='_blank'>View Resource ></a>"},
        { coords:[48.3416461724,-63.80859375],
          heading:"Clearing with coppiced hazel - Graham Turnbull",
          content:"This hazel (Corylus avellana) has been coppiced, leaving just three stems or 'poles' to continue growing.  These can be bent over and pinned to the ground, where they will take root and form the next generation of hazel trees. The 'layering' technique positions new saplings 5ft from the parent tree, helping to suppress competition from brambles (Rubus fruticosus).",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/clearing-coppiced-hazel/' target='_blank'>View Resource ></a>"},
        { coords:[46.3165841818,-2.4609375],
          heading:"Clearing with regrowth - Graham Turnbull",
          content:"This clearing was created to allow woodland plants, the seeds of which remain dormant in the soil for many decades, the chance to reestablish.  It takes regular maintenance by volunteers to prevent brambles (Rubus fruticosus) and tree saplings from overshadowing them.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/clearing-with-regrowth/' target='_blank'>View Resource ></a>"},
        { coords:[0,-33.75],
          heading:"Honeysuckle - Bracken Moorland",
          content:"Sweet-smelling honeysuckle (Lonicera periclymenum) is abundant in this part of the wood and is especially fragrant at night to attract pollinating moths.  Honeysuckle will only bloom abundantly in brighter locations and may fail to flower in deep shade.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/honeysuckle/' target='_blank'>View Resource ></a>"},
        { coords:[54.0077687619,-13.271484375],
          heading:"Clearing with bluebells - Ian Wilshaw",
          content:" Bluebells (Hyacinthoides non-scripta) are the dominant plant species in this large clearing. One of the reasons they do so well here is because they are encircled by a 'dead hedge'. This not only protects plants and tree saplings from being trampled, but it also provides an additional habitat for insects and other small animals.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/clearing-with-bluebells/' target='_blank'>View Resource ></a>"},
        { coords:[48.2246726496,-27.94921875],
          heading:"Nurse log - Rebecca Gransbury",
          content:"Where trees have been felled to creating a clearing in the canopy, they are sometimes left in situ because a decaying tree makes a great habitat.  Often referred to as nurse logs, many plants, fungi and animals benefit from the shade, shelter and the nutrients they provide.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/nurse-log/' target='_blank'>View Resource ></a>"},
        { coords:[49.4966745275,-13.798828125],
          heading:"Sweet chestnut at woodland edge - Richard Kedward",
          content:"Because sweet chestnut (Castanea sativa) grows relatively fast it can often look older than its true age, especially when compared with slow growing oak (Quercus spp.)  This specimen measures 4.1m around the girth and yet it is probably no more than 150 years old.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-woodland-edge/' target='_blank'>View Resource ></a>"},
        { coords:[62.7144621015,-15.64453125],
          heading:"Charcoal Burner - Sally Goldsmith",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/charcoal-burner/' target='_blank'>View Resource ></a>"},
        { coords:[18.5629474429,-77.34375],
          heading:"Bird song - Sue Unwin",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/bird-song/' target='_blank'>View Resource ></a>"},
        { coords:[56.8008783123,-10.810546875],
          heading:"Tree survey, Wood 2: larch",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-larch/' target='_blank'>View Resource ></a>"},
        { coords:[34.7416124988,-96.6796875],
          heading:"Veteran rowan - Fran Halsall",
          content:"Although this particular rowan, or mountain ash, (Sorbus aucuparia) is not a large tree, compared with its taller neighbours, it is still potentially quite old.  Because it is such a slow-growing tree a trunk girth of just 1.5m makes it a likely veteran, an assessment supported by the presence of emerging basal shoots.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/veteran-rowan/' target='_blank'>View Resource ></a>"},
        { coords:[58.5395947666,-41.572265625],
          heading:"Veteran beech - Fran Halsall",
          content:"There are several large beeches (Fagus sylvatica) in the woods and at 3.9m around the girth, this is one of the biggest. Although the only way to truly know a tree's age is to count its rings, a rough estimate would place this beech between 200 and 300 years old.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/veteran-beech/' target='_blank'>View Resource ></a>"},
        { coords:[65.3668368923,-11.6015625],
          heading:"Twisted hornbeam - Fran Halsall",
          content:"Hornbeam (Carpinus betulus) was introduced to northern Britain from the south, like the beech (Fagus sylvatica) it so closely resembles.  It was planted here for both its durable timber and for its attractive ornamental qualities.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/twisted-hornbeam/' target='_blank'>View Resource ></a>"},
        { coords:[84.3542995777,-37.79296875],
          heading:"Sweet chestnut and scots pine - Fran Halsall",
          content:"Large trees usually stay out of each other's way, however this Scot's pine (Pinus sylvestris), an evergreen conifer, is being embraced by a sweet chestnut (Castanea sativa). Both species were extensively planted in the woods during the 19th century, when coppicing was abandoned in favour of producing large timber for industry.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-scots-pine/' target='_blank'>View Resource ></a>"},
        { coords:[-15.7076627696,-40.60546875],
          heading:"Veteran coppiced oak - Fran Halsall",
          content:"It is almost impossible to provide an accurate age for a coppiced tree, however this oak (Quercus spp.) offers a few clues. The height of the coppice stool - the base from which the two stems grew - indicates multiple cycles of cutting and regrowth. It has then had many decades to regrow into a full-sized tree. 300 - 400 years old is a reasonable guestimate.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/veteran-coppiced-oak/' target='_blank'>View Resource ></a>"},
        { coords:[77.5231217902,9.4921875],
          heading:"Veteran oak - Fran Halsall",
          content:"Trunk girth alone can reveal only so much about this oak's (Quercus spp.) age.  Its environment has to be considered, as a tree located inside shady woodland will grow much more slowly than one in a sunny spot.  At 3.5m, and surrounded by mature woodland, this oak is possibly 300 years old.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/veteran-oak/' target='_blank'>View Resource ></a>"},
        { coords:[51.7814356044,-18.984375],
          heading:"Slumped beech - Fran Halsall",
          content:"With its slumped shape and 3.75m girth this is a particularly striking beech (Fagus sylvatica). It is possible that it is a 'lapsed' coppice, although there could be other natural causes that would account for the unusual growth habit.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/slumped-beech/' target='_blank'>View Resource ></a>"},
        { coords:[83.0687741347,-39.111328125],
          heading:"Multistem hazel- Sue Unwin",
          content:"Providing both nuts and fast-growing timber, hazel (Corylus avellana) was important to those who once made their living from the woods.   Coppicing encourges the growth of more stems and, when done at regular intervals, prolongs hazel's lifespan from 80 to two hundred years or more.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/multistem-hazel-2/' target='_blank'>View Resource ></a>"},
        { coords:[65.2934678011,47.724609375],
          heading:"Common beech - Sue Unwin",
          content:"Beech (Fagus sylvatica) is recognisable by its grey, often smooth, bark and its dominating stature.  These trees have shallow roots and their prominence at the surface is another identifying characteristic.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/common-beech/' target='_blank'>View Resource ></a>"},
        { coords:[51.727028157,-12.919921875],
          heading:"Sweet chestnut and clearing - Dan Sumption",
          content:"A large two-stemmed coppiced sweet chestnut (Castanea sativa) frames the view into a large woodland clearing.   This species was introduced into these woods approximately 190 years ago as a fast growing alternative to oak.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-clearing/' target='_blank'>View Resource ></a>"},
        { coords:[73.4033376629,-31.728515625],
          heading:"Wood anemone - Nadine Grundy",
          content:"Wood anemone (Anemone nemorosa) is among the earliest spring flowers, appearing in March - April, and spreading out to form a carpet that thrives in light shade. This is a five-petalled flower, six or seven petals are more common.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/wood-anemone/' target='_blank'>View Resource ></a>"},
        { coords:[56.0720354718,-10.72265625],
          heading:"Collier's pond - Bracken Moorland",
          content:"The Collier's Pond was created on the site of an abandoned ganister mine in 2009 and quickly became an important habitat. Beyond the hazel screen or 'hurdle', pendulous sedge (Carex pendula) and yellow-flowered flag iris (Iris pseudacorus) thrive on the damp pond margins.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/colliers-pond/' target='_blank'>View Resource ></a>"},
        { coords:[81.1609960899,1.142578125],
          heading:"Common beech - Lynne Chapman",
          content:"As with all trees, an increasingly gnarled look is a sign of greater age; even smooth-barked beech (Fagus sylvatica) is no exception.  Other signs to look for include:  crevices, dead wood in the crown, and plants/fungi growing on the tree.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/common-beech-2/' target='_blank'>View Resource ></a>"},
        { coords:[58.5854356912,-23.02734375],
          heading:"Tree survey, Wood 2: oak",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-oak/' target='_blank'>View Resource ></a>"},
        { coords:[55.6279959543,-13.798828125],
          heading:"Tree survey, Wood 2: English oak",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-english-oak/' target='_blank'>View Resource ></a>"},
        { coords:[61.7731228645,-11.337890625],
          heading:"Tree survey, Wood 2: Scot's pine",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-scots-pine/' target='_blank'>View Resource ></a>"},
      ],
      minZoom: 2,
      maxZoom: 4,
      url: '/static/assets/tiles/none/{z}/{x}/{y}.png',
      attribution: 'SpringBoot-Map',
      title: 'SpringBoot-Map',
      opacity: 1,
      draggable: true,
      attributionControl: false,
    };
  },

  methods: {
    zoomend() {
      console.log(1)
    },
  }
};
</script>

<style lang="css">
.full {
  width: 100%;
  height: 100%;
}

#map,
#next {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
}
</style>
