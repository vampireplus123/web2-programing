<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i> German
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.german" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i> English
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.english" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="finland flag"></i> Finnish
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.finish" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'word-form',
  props: {
    word: {
      type: Object,
      required: false,
      default: () => ({
        english: '',
        german: '',
        finish: '',
        _id: ''  // Make sure _id is part of the word object
      })
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      console.log('Submitting word:', this.word);  // Log the word object to ensure _id is passed
      if (this.word.english === '' || this.word.german === '' || this.word.finish === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.word);  // Pass the word to parent (Edit component)
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
