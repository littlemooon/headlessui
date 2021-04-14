import { createApp } from 'vue-demi'
import App from './App.vue'
import router from './router'

import 'tailwindcss/tailwind.css'

createApp(App)
  .use(router)
  .mount('#app')
