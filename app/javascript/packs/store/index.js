import Vue from "vue/dist/vue.esm"
import Vuex from "vuex"
import axios from 'axios-on-rails'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    posts: [],
  },

  mutations: {
    updatePosts(state, payload) {
      state.posts = payload
    }
  },

  actions: {
    fetchPosts({ commit }) {
      axios.get(`/posts_json`).then(response => {
        commit("updatePosts", response.data);
      });
    }
  }

})

