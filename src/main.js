import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import 'normalize.css'
createApp(App).use(router).mount('#app')
