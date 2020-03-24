<template>
  <div id="app">
    <Header :search="search" />
    <Loading v-if="loading" />
    <Message
      :data="message"
      v-if="news.length === 0"
    />
    <List v-else :items="news" />
    <Pagination
      v-if="news.length > 0 && indexCount > 0 && offset < indexCount"
      :indexCount="indexCount"
      :maxResults="maxResults"
      :offset="offset"
      :searchPage="searchPage"
    />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header';
import Message from './components/Message';
import List from './components/List';
import Loading from './components/Loading';
import Pagination from './components/Pagination';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Message,
    List,
    Loading,
    Pagination,
    Footer
  },
  data() {
    return {
      query: '',
      news: [],
      maxResults: 100,
      offset: 0,
      indexCount: 0,
      message: {
        type: 'info',
        text: 'To begin type something'
      },
      loading: false
    };
  },
  methods: {
    async search(query = '') {
      if (query && query.trim()) {
        try {
          let maxResults = query !== this.query ? 100 : this.maxResults;
          let offset = query !== this.query ? 0 : this.offset;
          this.loading = true;
          const { data } = await axios.get(`${process.env.VUE_APP_API_SERVER}/news?search=${query.trim()}&maxResults=${maxResults}&offset=${offset}`);
          const { indexCount, news = [] } = data;
          ({ maxResults = 100, offset = 0 } = data);
          if (news.length === 0) {
            this.message = {
              type: 'info',
              text: 'No news found'
            };
          }
          this.query = query;
          this.news = news;
          this.maxResults = maxResults;
          this.offset = offset;
          this.indexCount = indexCount;
        } catch (err) {
          console.log(err);
          this.message = {
            type: 'error',
            text: 'Service unavailable. Please try again later'
          };
          this.defaultSearchValues();
        } finally {
          this.loading = false;
        }
      } else {
        this.message = {
          type: 'error',
          text: 'You have to provide a text to search!'
        };
        this.defaultSearchValues();
      }
    },
    searchPage(newPage, currentPage) {
      if (newPage !== currentPage) {
        window.scrollTo(0,0);
        this.offset = this.maxResults * (newPage - 1);
        this.search(this.query);
      }
    },
    defaultSearchValues() {
      this.news = [];
      this.maxResults = 100;
      this.offset = 0;
      this.indexCount = 0;
    }
  }
}
</script>

<style>
  @import 'https://www.ft.com/__origami/service/build/v2/bundles/css?modules=o-grid@^5.1.0,o-colors@^5.1.0,o-typography@^6.1.3,o-table@^8.0.3,o-header@^8.0.2,o-buttons@^6.0.9,o-message@4.1.1,o-loading@4.0.1,o-footer@^7.0.2';
</style>
