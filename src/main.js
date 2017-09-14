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
    keyString: 'Map',
    // Holds the border colour of the kay drawer
    borderColour: '#afdffd'
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
     * Get the current key string
     * @param state
     */
    keyString: state => state.keyString,
    getKey(state) {
      return matchKeyString => {
        return state.keyString === matchKeyString;
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
      let newKey = 0, string = 'Map'

      if(keyString === 'tree') {
        newKey = 3
        string = 'Tree'
      }
      else if(keyString === 'wildflower') {
        newKey = 2
        string = 'Wildflower'
      }
      else if(keyString === 'bluebell') {
        newKey = 1
        string = 'Bluebell'
      }
      state.key = newKey;
      state.keyString = string;
    },

    /**
     * Setter to set the border colour based of the string used to change tile URL
     * This enables us to set this with the same function that switches map tiles
     * @param state
     * @param keyString
     */
    setBorderColour(state, keyString) {
      // Set new hex to the default, then change depending on the string supplied
      let newColour = '#afdffd'
      if(keyString === 'tree') {
        newColour = '#8bcc82'
      }
      else if(keyString === 'wildflower') {
        newColour = '#fddbaf'
      }
      else if(keyString === 'bluebell') {
        newColour = '#b1a8ea'
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
