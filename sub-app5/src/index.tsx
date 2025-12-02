import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// 乾坤微应用生命周期
let root: ReactDOM.Root | null = null;

const render = (props: any = {}) => {
  const { container } = props;
  const dom = container ? container.querySelector('#root') : document.getElementById('root');
  
  if (dom) {
    root = ReactDOM.createRoot(dom);
    root.render(<App />);
  }
};

// 启动函数
export async function bootstrap() {
  console.log('React app bootstraped');
}

// 挂载函数
export async function mount(props: any) {
  console.log('React app mount', props);
  render(props);
}

// 卸载函数
export async function unmount(props: any) {
  console.log('React app unmount', props);
  if (root) {
    root.unmount();
    root = null;
  }
}

// 如果不是被乾坤加载，独立运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}