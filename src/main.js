import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// icon
import RegisterIcon from './icons/index.js'

const app = createApp(App)
installElementPlus(app)
// icon part
RegisterIcon(app)

app.use(store).use(router).mount('#app')
