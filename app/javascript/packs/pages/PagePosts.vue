<template>
  <div>
    <div class="table-nav-bar">
      <div class="item">
        <b-form-input v-model="query" size="lg" placeholder="search ..."></b-form-input>
      </div>
    </div>
    <b-table
      striped hover fixed
      :items="posts"
      :fields="fields"
      :per-page="perPage"
      :filter="query">
      <template slot="HEAD_title" slot-scope="data">
        <div class="flex-full-center">
          <div class="push-right">POSTS</div>
        </div>
      </template>
      <template slot="title" slot-scope="data">
          {{data.item.title}}
      </template>
      <template slot="date" slot-scope="data">
          {{data.item.date}}
      </template>
      <template slot="author" slot-scope="data">
          {{data.item.author}}
      </template>

    </b-table>
  </div>
</template>

<script>
import axios from 'axios-on-rails'

export default {
  data() {
    return {
      query: null,
      fields: [
          {
            key: 'title',
            label: 'title'
          },
          {
            key: 'date',
            label: 'date'
          },
          {
            key: 'author',
            label: 'author'
          },
          {
            key: 'content',
            label: 'content'
          },
          {
            key: 'country',
            label: 'country'
          },
          {
            key: 'file',
            label: 'file'
          },
        ],
      perPage: 10,
      fixed: true
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  beforeCreate() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style>
</style>







