import '@/assets/styles/fonts.scss'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/globals.css'
import '@/assets/styles/custom-scrollbar.css'
import '@/app/plugins'

import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'

const bootstrap = () => {
  const app = createApp(App)
  app.use(router)

  app.mount('#__app')
}

bootstrap()
