import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import feed from '@/store/modules/feed';
import popularTags from '@/store/modules/popularTags';
import article from '@/store/modules/article';
import createArticle from '@/store/modules/createArticle';
import editArticle from '@/store/modules/editArticle';
import settings from '@/store/modules/settings';
import addToFavorites from '@/store/modules/addToFavorites';
import userProfile from '@/store/modules/userProfile';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    popularTags,
    article,
    createArticle,
    editArticle,
    settings,
    addToFavorites,
    userProfile
  }
});
