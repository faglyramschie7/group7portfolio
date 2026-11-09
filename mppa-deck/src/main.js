import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { initPostMountInspectors } from './post-mount-inspectors.js';

const app = createApp(App);
const vm = app.mount('#app');
window.app = vm;

// Initialize post-mount inspectors
try {
  initPostMountInspectors();
} catch (err) {
  console.warn('Matrix inspector init warning:', err);
}
