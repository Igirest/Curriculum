
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import store from './store'





createApp(App)

    .use(store)
    .use(createPinia())
    .use(router)
    .mount('#app')

