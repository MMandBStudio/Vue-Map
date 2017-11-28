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
          heading:"1. Multistem hazel - Bracken Moorland",
          content:"Hazel (Corylus avellana) is an understory shrub that grows in the dappled shade of taller trees.  This example has been coppiced, a traditional process where a tree is cut back to encourage the regrowth of many smaller stems, which were traditionally used in furniture making and thatched roofing.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/multistem-hazel/' target='_blank'>View Resource ></a>"},
        { coords:[45.0890355648,-2.98828125],
          heading:"2. Wild Strawberry - Bracken Moorland",
          content:"The wild or woodland strawberry (Fragaria vesca) looks like a smaller version of the cultivated variety. The population of this species is now increasing here after selected trees were felled and the shrub layer cleared a few years ago, allowing more light to reach the ground. ",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/wild-strawberry/' target='_blank'>View Resource ></a>"},
        { coords:[77.3125199382,2.109375],
          heading:"3. Tree survey, Wood 1: sweet chestnut",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-1-sweet-chestnut/' target='_blank'>View Resource ></a>"},
        { coords:[48.3416461724,-46.0546875],
          heading:"4. Tangled vegetation - Dan Sumption",
          content:"To succeed among all the other vegetation bluebell bulbs (Hyacinthoides non-scripta) must produce their leaves early in the year, before the deciduous tree canopy closes over and light levels drop.  This successful strategy means that bluebells are the dominant plant in many areas of the wood.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tangled-vegetation/' target='_blank'>View Resource ></a>"},
        { coords:[45.583289756,-36.9140625],
          heading:"5. Beech and sweet chestnut - Dan Sumption",
          content:"This part of the wood is a mix of sweet chestnut (Castanea sativa), on the left, and beech (Fagus sylvatica), the lower branches of which are seen.  Neither of these trees are native to northern Britain: sweet chestnut was introduced from southern Europe, whereas beech originally grew only in southern Britain.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/beech-sweet-chestnut/' target='_blank'>View Resource ></a>"},
        { coords:[48.3416461724,-63.80859375],
          heading:"6. Clearing with coppiced hazel - Graham Turnbull",
          content:"This hazel (Corylus avellana) has been coppiced, leaving just three stems or 'poles' to continue growing.  These can be bent over and pinned to the ground, where they will take root and form the next generation of hazel trees. The 'layering' technique positions new saplings 5ft from the parent tree, helping to suppress competition from brambles (Rubus fruticosus).",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/clearing-coppiced-hazel/' target='_blank'>View Resource ></a>"},
        { coords:[46.3165841818,-2.4609375],
          heading:"7. Clearing with regrowth - Graham Turnbull",
          content:"This clearing was created to allow woodland plants, the seeds of which remain dormant in the soil for many decades, the chance to reestablish.  It takes regular maintenance by volunteers to prevent brambles (Rubus fruticosus) and tree saplings from overshadowing them.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/clearing-with-regrowth/' target='_blank'>View Resource ></a>"},
        { coords:[0,-33.75],
          heading:"8. Honeysuckle - Bracken Moorland",
          content:"Sweet-smelling honeysuckle (Lonicera periclymenum) is abundant in this part of the wood and is especially fragrant at night to attract pollinating moths.  Honeysuckle will only bloom abundantly in brighter locations and may fail to flower in deep shade.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/honeysuckle/' target='_blank'>View Resource ></a>"},
        { coords:[54.0077687619,-13.271484375],
          heading:"9. Clearing with bluebells - Ian Wilshaw",
          content:" Bluebells (Hyacinthoides non-scripta) are the dominant plant species in this large clearing. One of the reasons they do so well here is because they are encircled by a 'dead hedge'. This not only protects plants and tree saplings from being trampled, but it also provides an additional habitat for insects and other small animals.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/clearing-with-bluebells/' target='_blank'>View Resource ></a>"},
        { coords:[48.2246726496,-27.94921875],
          heading:"10. Nurse log - Rebecca Gransbury",
          content:"Where trees have been felled to creating a clearing in the canopy, they are sometimes left in situ because a decaying tree makes a great habitat.  Often referred to as nurse logs, many plants, fungi and animals benefit from the shade, shelter and the nutrients they provide.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/nurse-log/' target='_blank'>View Resource ></a>"},
        { coords:[49.4966745275,-13.798828125],
          heading:"11. Sweet chestnut at woodland edge - Richard Kedward",
          content:"Because sweet chestnut (Castanea sativa) grows relatively fast it can often look older than its true age, especially when compared with slow growing oak (Quercus spp.)  This specimen measures 4.1m around the girth and yet it is probably no more than 150 years old.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-woodland-edge/' target='_blank'>View Resource ></a>"},
        { coords:[62.7144621015,-15.64453125],
          heading:"12. Charcoal Burner - Sally Goldsmith",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/charcoal-burner/' target='_blank'>View Resource ></a>"},
        { coords:[18.5629474429,-77.34375],
          heading:"13. Bird song - Sue Unwin",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/bird-song/' target='_blank'>View Resource ></a>"},
        { coords:[56.8008783123,-10.810546875],
          heading:"14. Tree survey, Wood 2: larch",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-larch/' target='_blank'>View Resource ></a>"},
        { coords:[34.7416124988,-96.6796875],
          heading:"15. Veteran rowan - Fran Halsall",
          content:"Although this particular rowan, or mountain ash, (Sorbus aucuparia) is not a large tree, compared with its taller neighbours, it is still potentially quite old.  Because it is such a slow-growing tree a trunk girth of just 1.5m makes it a likely veteran, an assessment supported by the presence of emerging basal shoots.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/veteran-rowan/' target='_blank'>View Resource ></a>"},
        { coords:[58.5395947666,-41.572265625],
          heading:"16. Veteran beech - Fran Halsall",
          content:"There are several large beeches (Fagus sylvatica) in the woods and at 3.9m around the girth, this is one of the biggest. Although the only way to truly know a tree's age is to count its rings, a rough estimate would place this beech between 200 and 300 years old.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/veteran-beech/' target='_blank'>View Resource ></a>"},
        { coords:[65.3668368923,-11.6015625],
          heading:"17. Twisted hornbeam - Fran Halsall",
          content:"Hornbeam (Carpinus betulus) was introduced to northern Britain from the south, like the beech (Fagus sylvatica) it so closely resembles.  It was planted here for both its durable timber and for its attractive ornamental qualities.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/twisted-hornbeam/' target='_blank'>View Resource ></a>"},
        { coords:[84.3542995777,-37.79296875],
          heading:"18. Sweet chestnut and scots pine - Fran Halsall",
          content:"Large trees usually stay out of each other's way, however this Scot's pine (Pinus sylvestris), an evergreen conifer, is being embraced by a sweet chestnut (Castanea sativa). Both species were extensively planted in the woods during the 19th century, when coppicing was abandoned in favour of producing large timber for industry.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-scots-pine/' target='_blank'>View Resource ></a>"},
        { coords:[-15.7076627696,-40.60546875],
          heading:"19. Veteran coppiced oak - Fran Halsall",
          content:"It is almost impossible to provide an accurate age for a coppiced tree, however this oak (Quercus spp.) offers a few clues. The height of the coppice stool - the base from which the two stems grew - indicates multiple cycles of cutting and regrowth. It has then had many decades to regrow into a full-sized tree. 300 - 400 years old is a reasonable guestimate.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/veteran-coppiced-oak/' target='_blank'>View Resource ></a>"},
        { coords:[77.5231217902,9.4921875],
          heading:"20. Veteran oak - Fran Halsall",
          content:"Trunk girth alone can reveal only so much about this oak's (Quercus spp.) age.  Its environment has to be considered, as a tree located inside shady woodland will grow much more slowly than one in a sunny spot.  At 3.5m, and surrounded by mature woodland, this oak is possibly 300 years old.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/veteran-oak/' target='_blank'>View Resource ></a>"},
        { coords:[51.7814356044,-18.984375],
          heading:"21. Slumped beech - Fran Halsall",
          content:"With its slumped shape and 3.75m girth this is a particularly striking beech (Fagus sylvatica). It is possible that it is a 'lapsed' coppice, although there could be other natural causes that would account for the unusual growth habit.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/slumped-beech/' target='_blank'>View Resource ></a>"},
        { coords:[83.0687741347,-39.111328125],
          heading:"22. Multistem hazel- Sue Unwin",
          content:"Providing both nuts and fast-growing timber, hazel (Corylus avellana) was important to those who once made their living from the woods.   Coppicing encourges the growth of more stems and, when done at regular intervals, prolongs hazel's lifespan from 80 to two hundred years or more.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/multistem-hazel-2/' target='_blank'>View Resource ></a>"},
        { coords:[65.2934678011,47.724609375],
          heading:"23. Common beech - Sue Unwin",
          content:"Beech (Fagus sylvatica) is recognisable by its grey, often smooth, bark and its dominating stature.  These trees have shallow roots and their prominence at the surface is another identifying characteristic.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/common-beech/' target='_blank'>View Resource ></a>"},
        { coords:[51.727028157,-12.919921875],
          heading:"24. Sweet chestnut and clearing - Dan Sumption",
          content:"A large two-stemmed coppiced sweet chestnut (Castanea sativa) frames the view into a large woodland clearing.   This species was introduced into these woods approximately 190 years ago as a fast growing alternative to oak.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-clearing/' target='_blank'>View Resource ></a>"},
        { coords:[73.4033376629,-31.728515625],
          heading:"25. Wood anemone - Nadine Grundy",
          content:"Wood anemone (Anemone nemorosa) is among the earliest spring flowers, appearing in March - April, and spreading out to form a carpet that thrives in light shade. This is a five-petalled flower, six or seven petals are more common.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/wood-anemone/' target='_blank'>View Resource ></a>"},
        { coords:[56.0720354718,-10.72265625],
          heading:"26. Collier's pond - Bracken Moorland",
          content:"The Collier's Pond was created on the site of an abandoned ganister mine in 2009 and quickly became an important habitat. Beyond the hazel screen or 'hurdle', pendulous sedge (Carex pendula) and yellow-flowered flag iris (Iris pseudacorus) thrive on the damp pond margins.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/colliers-pond/' target='_blank'>View Resource ></a>"},
        { coords:[81.1609960899,1.142578125],
          heading:"27. Common beech - Lynne Chapman",
          content:"As with all trees, an increasingly gnarled look is a sign of greater age; even smooth-barked beech (Fagus sylvatica) is no exception.  Other signs to look for include:  crevices, dead wood in the crown, and plants/fungi growing on the tree.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/common-beech-2/' target='_blank'>View Resource ></a>"},
        { coords:[58.5854356912,-23.02734375],
          heading:"28. Tree survey, Wood 2: oak",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-oak/' target='_blank'>View Resource ></a>"},
        { coords:[55.6279959543,-13.798828125],
          heading:"29. Tree survey, Wood 2: English oak",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-english-oak/' target='_blank'>View Resource ></a>"},
        { coords:[61.7731228645,-11.337890625],
          heading:"30. Tree survey, Wood 2: Scot's pine",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-scots-pine/' target='_blank'>View Resource ></a>"},
        { coords:[41.705728515237524,-91.23046875],
          heading:"31. Sweet chestnut and oak woodland - Daniel Blackburn",
          content:"The largest trees in this area of the wood are all sweet chestnut (Castanea sativa), which easily outgrow neighbouring oaks (Quercus spp.) Looking northeast along the main path there appears to be a mound of grass on the left; this is actually a large patch of greater wood rush (Luzula sylvatica) an evergreen plant that colonises shady locations.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-oak-woodland/' target='_blank'>View Resource ></a>"},
         { coords:[37.09023980307208,-95.537109375],
          heading:"32. Oak and sweet chestnut woodland - Daniel Blackburn",
          content:"Looking southwest from the main path, this area is dominated by sweet chestnut (Castanea sativa) and oak (Quercus spp.).  At this point the topography abruptly changes; the ground drops away over a sandstone escarpment before reaching the Limb Brook more than 20 metres below.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/oak-sweet-chestnut-woodland/' target='_blank'>View Resource ></a>"}, 
         { coords:[12.983147716796578,-64.86328125000001],
          heading:"33. Hairy curtain crust - Jack Brodie",
          content:"Hairy curtain crust fungus (Stereum hirsutum)is common in Britain and Ireland, and is widely distributed throughout the world.  Visible year-round, it is frequently mistaken for turkeytail fungus (Trametes versicolor) although it can be distinguished by its hairy upper surfaces. This species is particularly associated with the rotting trunks and branches of oak and beech.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/hairy-curtain-crust/' target='_blank'>View Resource ></a>"}, 
         { coords:[30.14512718337613,-44.82421875000001],
          heading:"34. Yellow sulphur tuft - Jack Brodie",
          content:"Yellow sulphur tuft (Hypholoma fasciculare) are a common species found in both deciduous and coniferous woods from late summer onwards.  With their bright colour and their habit of growing in crowded colonies they are easy to spot, however do not be tempted to touch them as they are poisonous.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/yellow-sulphur-tuft/' target='_blank'>View Resource ></a>"},
         { coords:[36.59788913307022,-30.849609375000004],
          heading:"35. Bleeding broadleaf crust - Jack Brodie",
          content:"Bleeding broadleaf crust (Stereum rugosum) is very common, is visible throughout the year and yet is easily overlooked due to its unassuming appearance.  The primary means of identification is that it bleeds red when scratched.  Otherwise it is most typically associated with decaying hazel.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/bleeding-broadleaf-crust/' target='_blank'>View Resource ></a>"}, 
         { coords:[24.5271348225978,-50.44921875000001],
          heading:"36. Sweet chestnut cupule - Jack Brodie",
          content:"Edible sweet chestnut (Castanea sativa) is easily distinguished from toxic horse chestnut (Aesculus hippocastanum), aka conker, as the casing or 'cupule' is covered with flexible spines that are quite different from the conker's spines. The sweet chestnuts found on the woodland floor contain two or three nuts, unlike the single large nut associated with commercially grown cultivars.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-cupule/' target='_blank'>View Resource ></a>"}, 
         { coords:[77.87881372624746,10.195312500000002],
          heading:"37. Large veteran beech - Fran Halsall",
          content:"At 4.45m around the girth this is one of, if not the largest, beech (Fagus sylvatica) in Ecclesall Woods.  If it grew up surrounded by woodland it could be anywhere between 250 and 350 years old, dependent upon how much competition it faced.  This means that it pre-dates the widespread introduction of beech into the woods approximately 190 years ago.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/large-veteran-beech/' target='_blank'>View Resource ></a>"}, 
         { coords:[68.17155518732503,15.117187500000002],
          heading:"38. Tree survey, Wood 2: beech",
          content:"",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/tree-survey-wood-2-beech-2/' target='_blank'>View Resource ></a>"},    
         { coords:[44.08758502824518,-89.47265625],
          heading:"39. Sweet chestnut stump - Scarlett Howie",
          content:"Sweet chestnuts (Castanea sativa) were introduced into the woods because they are a fast-growing source of timber. The resprouting shoots found on this decaying stump are testament to their vigour. Rotting tree stumps provide an important habitat for woodland invertebrates and fungi.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-stump/' target='_blank'>View Resource ></a>"}, 
         { coords:[48.516604348867475,-64.59960937500001],
          heading:"40. Ash tree - Cailen Howie",
          content:"Ash (Fraxinus excelsior) occurs frequently in this part of the wood, where an area of lapsed hazel coppice, and associated plants, is being restored. Ash, unlike some broadleaf trees, has an open crown that allows plenty of sunshine to reach the understory, and it's light leaf fall is quick to decompose meaning that it does not smother the groundflora emerging the following spring.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/ash-tree/' target='_blank'>View Resource ></a>"},  
         { coords:[48.63290858589535,-69.16992187500001],
          heading:"41. Hawthorn - Cailen Howie",
          content:"This hawthorn (Crataegus monogyna) is part of a hedge forming an old field boundary. Hawthorn is a difficult tree to accurately age; their slow growth habit means they rarely reach an impressive girth. A 50 year old hedge may look similar to one that is three times the age, as hard pruning rejuvenates the tree prolonging it's natural lifespan.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/hawthorn/' target='_blank'>View Resource ></a>"},
         { coords:[77.76758238272801,-21.357421875000004],
          heading:"42. Broad buckler fern - Christine Thuring",
          content:"The broad buckler fern (Dryopteris dilatata) is a common sight in the woods. Its wide triangular leaves grow up to 100cm in length and it can be distinguished from similar deciduous ferns by the noticeable spacing between the individual leaflets arranged along the stem. Usually found growing in shade, this fern requires moist soils and/or deep leaf litter.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/broad-buckler-fern/' target='_blank'>View Resource ></a>"},
         { coords:[79.0049621603135,-30.849609375000004],
          heading:"43. Suckering sweet chestnut - Fran Halsall",
          content:"Suckers' or basal shoots emerge from the bottom of a sweet chestnut (Castanea sativa). Suckering is a response to disease affecting a tree's vigour or to intensive pruning, aka 'topping', where the tree's crown is removed. In each case the tree is attempting to regenerate from the base.  When occurring naturally it can be an indicator of significant age and is a characteristic of veteran trees.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/suckering-sweet-chestnut/' target='_blank'>View Resource ></a>"}, 
         { coords:[68.17155518732503,9.404296875000002],
          heading:"44. Beech grove  - Fran Halsall",
          content:"This 'grove' is typical of the way beech (Fagus sylvatica) asserts itself within the woods. Their dense crowns cast deep shade; their roots hungrily extract nutrients and moisture from the soil; and their fallen leaves are slow to decompose.  Between these factors they suppress most other groundflora, creating swathes of ground left bare apart from a carpet of leaves.",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/beech-grove/' target='_blank'>View Resource ></a>"}, 
         { coords:[68.17155518732503,9.404296875000002],
          heading:"45. Sweet chestnut coppice and pollard",
          content:"This sweet chestnut (Castanea sativa) has been coppiced, producing three main trunks, and later pollarded, creating multiple shoots where cut. Sadly this historically interesting specimen is succumbing to Phytophora, a fungal infection recognisable by dark stains on the bark, whose mycelium 'girdle' the tree until it can no longer respire or circulate nutrients. ",
          link:"<a href='http://sheffieldwoodlandconnections.co.uk/sweet-chestnut-coppice-and-pollard/' target='_blank'>View Resource ></a>"},   
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
