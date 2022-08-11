import { createApp } from 'vue'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import router from './router'

function render(container?: HTMLElement) {
  createApp(App)
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app')
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
} else {
  renderWithQiankun({
    bootstrap() {
      console.log('启动')
    },
    mount(props) {
      console.log('挂载')
      console.log(props)
      render(props.container)
    },
    unmount(props) {
      console.log('卸载')
      console.log(props)
    },
    update(props) {
      console.log('更新')
      console.log(props)
    }
  })
}

console.log(qiankunWindow)
