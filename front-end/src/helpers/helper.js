import axios from 'axios';
import Vue from 'vue';
import vueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(vueFlashMessage, {
  messageOption: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const baseURL = 'http://localhost:3000/words/';

const handleError = fn => (...params) => {
  return fn(...params).catch(error => {
    console.log('Error:', error);
  });
};

export const api = {
  getWord: handleError(async id => {
    const res = await axios.get(baseURL + id);
    console.log('Fetched word:', res.data);  // Log the fetched word for debugging
    return res.data;
  }),
  getWords: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleteWord: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createWord: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updateWord: handleError(async payload => {
    console.log('Sending update request for word:', payload);  // Log the payload before sending
    const res = await axios.put(baseURL + payload._id, payload);
    console.log('Update response:', res.data);  // Log the response after updating
    return res.data;
  })
};
