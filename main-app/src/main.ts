import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')

registerMicroApps([{
  name: 'sub-app1',
  entry: '//localhost:5174',
  container: '#app',
  activeRule: '/app1'
}])

start()
