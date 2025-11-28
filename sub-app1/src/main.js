import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null;

function render(props = {}) {
  const { container } = props;
  
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 导出乾坤生命周期钩子函数
export async function bootstrap() {
  console.log('[sub-app1] bootstrap');
}

export async function mount(props) {
  console.log('[sub-app1] mount', props);
  render(props);
}

export async function unmount() {
  console.log('[sub-app1] unmount');
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
