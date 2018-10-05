/* eslint no-console:0 */
import TurbolinksAdapter from 'vue-turbolinks';
import Vue from 'vue/dist/vue.esm'
import store from '../packs/store'
import BootstrapVue from 'bootstrap-vue'
import Pageposts from '../packs/pages/PagePosts.vue'

Vue.use(BootstrapVue);

document.addEventListener('turbolinks:load', () => {
  const app1 = new Vue({
    el: '#pagePosts',
    store,
    components: {
      Pageposts
    }
  });
})
