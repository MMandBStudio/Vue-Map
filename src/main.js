import Vue from 'vue';
import Vuex from 'vuex';
import VueLeaflet from './index'
import App from './Layout';

Vue.use(Vuex);

//Add your customized store
const store = new Vuex.Store({
  state: {
    // Holds the ID of the key component to display
    key: 0,
    // Holds the border colour of the kay drawer
    borderColour: '#70C5FB'
  },
  getters: {
    /**
     * Get the current key ID (seems a bit of a round about way but it's how the docs show)
     * @param state
     */
    key: state => state.key,
    getKey(state) {
      return matchKey => {
        return state.key === matchKey;
      }
    },

    /**
     * Get the border colour
      * @param state
     */
    borderColour: state => state.borderColour,
    getColour(state) {
      return matchColour => {
        return state.borderColour === matchColour;
      }
    },
  },
  mutations: {
    /**
     * Setter to set the ID based of the string used to change tile URL
     * This enables us to set this with the same function that switches map tiles
     * @param state
     * @param keyString
     */
    setKey(state, keyString) {
      // Set new ID to 0, then change depending on the string supplied
      let newKey = 0
      if(keyString === 'tree') {
        newKey = 3
      }
      else if(keyString === 'wildflower') {
        newKey = 2
      }
      else if(keyString === 'bluebell') {
        newKey = 1
      }
      state.key = newKey;
    },

    /**
     * Setter to set the border colour based of the string used to change tile URL
     * This enables us to set this with the same function that switches map tiles
     * @param state
     * @param keyString
     */
    setBorderColour(state, keyString) {
      // Set new hex to the default, then change depending on the string supplied
      let newColour = '#70C5FB'
      if(keyString === 'tree') {
        newColour = '#2EA31E'
      }
      else if(keyString === 'wildflower') {
        newColour = '#FABF71'
      }
      else if(keyString === 'bluebell') {
        newColour = '#7263DA'
      }
      state.borderColour = newColour;
    }
  }
});

Vue.use(VueLeaflet.plugin, store);

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
