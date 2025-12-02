import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// 乾坤微应用生命周期
declare const window: any;

let app: any = null;

// 启动函数
export async function bootstrap() {
  console.log('Angular app bootstraped');
}

// 挂载函数
export async function mount(props: any) {
  console.log('Angular app mount', props);
  const { container } = props;
  
  // 在 qiankun 容器中创建 Angular 应用的挂载点
  container.innerHTML = '<app-root></app-root>';
  
  // 设置 base href 为子应用的路由 - 只在独立运行时设置
  if (!window.__POWERED_BY_QIANKUN__) {
    const baseElement = document.createElement('base');
    baseElement.href = '/';
    document.head.appendChild(baseElement);
  }
  
  app = await platformBrowserDynamic([
    { provide: 'qiankunProps', useValue: props }
  ]).bootstrapModule(AppModule);
}

// 卸载函数
export async function unmount(props: any) {
  console.log('Angular app unmount', props);
  if (app) {
    app.destroy();
    app = null;
  }
}

// 如果不是被乾坤加载，独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

// 确保生命周期函数在全局范围内可用
if (window.__POWERED_BY_QIANKUN__) {
  window['subApp6Angular'] = {
    bootstrap,
    mount,
    unmount
  };
}

