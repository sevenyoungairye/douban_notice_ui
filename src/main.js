import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import './assets/main.css'
import './assets/index.css'

// https://router.vuejs.org/guide/#html

createApp(App).use(router).mount('#app')


// createApp(App).mount('#app')
