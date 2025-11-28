import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 处理乾坤下发的 publicPath
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let app = null;

function render(props = {}) {
  const { container } = props;
  app = createApp(App);
  app.use(router);
  app.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 乾坤生命周期
export async function bootstrap() {
  console.log('[sub-app3] bootstrap');
}

export async function mount(props) {
  console.log('[sub-app3] mount', props);
  render(props);
}

export async function unmount() {
  console.log('[sub-app3] unmount');
  if (app) {
    app.unmount();
    app = null;
  }
  
  // 清理可能残留的DOM元素
  const container = document.getElementById('subapp-container');
  if (container) {
    container.innerHTML = '';
  }
}