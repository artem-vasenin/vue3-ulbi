import axios from 'axios';

export default {
  state: () => ({
    list: [],
    loading: false,
    selected: '',
    search: '',
    page: 1,
    limit: 10,
    pages: 0,
    isFirstRender: true,
  }),
  actions: {
    async fetchPosts({state, commit}) {
      commit('setData', {name: 'loading', value: true});
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: { _page: state.page, _limit: state.limit },
        });
        commit('setData', {name: 'pages', value: Math.ceil(res.headers['x-total-count'] / state.limit)});
        return res.data;
      } catch (e) {
        console.error(e);
        return [];
      } finally {
        commit('setData', {name: 'loading', value: false});
      }
    },
    async setList({commit, dispatch}) {
      const list = await dispatch('fetchPosts');
      commit('setData', {name: 'list', value: list});
      commit('setData', {name: 'isFirstRender', value: false});
    },
    async addToList({state, commit, dispatch}) {
      commit('setData', {name: 'page', value: state.page + 1});
      const list = await dispatch('fetchPosts');
      commit('setData', {name: 'list', value: [...state.list, ...list]});
    },
    setSearch({commit}, val) {
      commit('setData', {name: 'search', value: val});
    },
    setSelected({commit}, val) {
      commit('setData', {name: 'selected', value: val});
    },
    clearPage({commit}) {
      commit('setData', {name: 'page', value: 1});
    },
    onDel({state, commit}, id) {
      const list = state.list.filter(item => item.id !== id);
      commit('setData', {name: 'list', value: list});
    },
    onAdd({state, commit}, form) {
      const list = [...state.list, {id: Date.now(), title: form.title, body: form.body}];
      commit('setData', {name: 'list', value: list});
    },
  },
  mutations: {
    setData(state, payload) {
      state[payload.name] = payload.value;
    }
  },
  getters: {
    sortedPosts(state) {
      const list = state.search.trim()
        ? state.list.filter(i => i.title.toLowerCase().includes(state.search.trim().toLowerCase())
          || i.body.toLowerCase().includes(state.search.trim().toLowerCase()))
        : state.list;

      if (state.selected) {
        return list.sort((a, b) => a[state.selected].localeCompare(b[state.selected]));
      }
      return list;
    },
  },
  namespaced: true,
}
