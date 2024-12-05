<template>
  <div>
    <h1>Show Word</h1>

    <div v-if="word" class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i> German
      </div>
      <input type="text" readonly :value="word.german" />
    </div>

    <div v-if="word" class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i> English
      </div>
      <input type="text" readonly :value="word.english" />
    </div>

    <div v-if="word" class="ui labeled input fluid">
      <div class="ui label">
        <i class="finland flag"></i> Finnish
      </div>
      <input type="text" readonly :value="word.finish" />
    </div>

    <div class="actions" v-if="word">
      <router-link :to="{ name: 'edit', params: { id: $route.params.id } }">
        Edit word
      </router-link>
    </div>

    <!-- Loading state -->
    <div v-else>
      <p>Loading word...</p>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helper'; // Assuming api.js is in helpers folder

export default {
  data() {
    return {
      word: null, // This will hold the word data
    };
  },
  created() {
    this.fetchWord();
  },
  methods: {
    async fetchWord() {
      try {
        const wordId = this.$route.params.id;
        this.word = await api.getWord(wordId); // Fetch the word using the API utility
      } catch (error) {
        console.error('Error fetching word:', error);
      }
    },
  },
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>
