/* eslint no-console:0 */
import Vue from 'vue/dist/vue.esm'
import Pageposts from '../packs/pages/PagePosts.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app1 = new Vue({
    el: '#pagePosts',
    components: {
      Pageposts
    }
  });
})
