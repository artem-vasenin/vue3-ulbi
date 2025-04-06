<template>
  <div class="post" v-if="post">
    <h1 class="title">{{post.title}} #{{post.id}}</h1>
    <p class="desc">
      {{post.body}}
    </p>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostPage',
  props: ['postId'],
  data() {
    return {
      post: null,
      loading: false,
    }
  }, methods: {
    async getPost() {
      this.loading = true;
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`);
        this.post = res.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    if (this.postId) {
      this.getPost();
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  border: 3px solid teal;
  padding: 12px;
}
.title {
  color: teal;
  margin-bottom: 24px;
  border-bottom: 1px solid teal;
  padding-bottom: 24px;
}
</style>
