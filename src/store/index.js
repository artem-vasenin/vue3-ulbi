import {createStore} from 'vuex';
import postStore from '@/store/postStore';

export default createStore({
  modules: {
    postStore,
  },
});
