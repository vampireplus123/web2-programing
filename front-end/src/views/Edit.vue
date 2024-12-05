<template>
    <div>
      <h1>Edit Word</h1>
      <word-form @createOrUpdate="createOrUpdate" :word="word"></word-form>
    </div>
  </template>
  
  <script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helper';

export default {
  name: 'edit',
  components: {
    'word-form': WordForm
  },
  data() {
    return {
      word: {},  // Initially empty
      isSubmitting: false  // Track if submission is in progress
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.word = await api.getWord(id);
  },
  methods: {
    createOrUpdate: async function(word) {
      if (this.isSubmitting) return;  // Prevent submitting if already in progress
      this.isSubmitting = true;  // Set the flag to prevent duplicate submissions
      
      try {
        await api.updateWord(word);
        this.flash('Word updated successfully!');
        this.$router.push(`/words/${word._id}`);
      } catch (error) {
        console.error("Error updating word:", error);
      } finally {
        this.isSubmitting = false;  // Reset the flag after completion
      }
    }
  }
};
</script>
