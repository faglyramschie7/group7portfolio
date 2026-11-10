import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);
const vm = app.mount('#app');
window.app = vm;
