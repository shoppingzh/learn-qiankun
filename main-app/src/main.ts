import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import router from './router'
import './style.scss'

createApp(App)
  .use(router)
  .mount('#app')

registerMicroApps([{
  name: 'sub-app1',
  entry: '//localhost:5174',
  container: '#app1',
  activeRule: '/app1'
}])

start({
  sandbox: {
    strictStyleIsolation: true
  }
})
