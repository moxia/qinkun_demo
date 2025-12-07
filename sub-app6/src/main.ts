import 'zone.js';
import './public-path';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

declare const window: any;

let app: any = null;

export async function bootstrap() {}

export async function mount(props: any) {
  console.log('[sub-app6] mount props', props);
  const { container } = props;
  const mountEl = document.createElement('div');
  mountEl.id = 'app6-root';
  mountEl.innerHTML = '<app-root></app-root>';
  if (container) container.appendChild(mountEl);
  try {
    app = await platformBrowserDynamic([{ provide: 'qiankunProps', useValue: props }]).bootstrapModule(AppModule);
    console.log('[sub-app6] mounted');
  } catch (e) {
    console.error('[sub-app6] mount error', e);
    throw e;
  }
}

export async function unmount(props: any) {
  console.log('[sub-app6] unmount');
  if (app) { app.destroy(); app = null; }
  const el = document.getElementById('app6-root');
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

if (!window.__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
}

if (window.__POWERED_BY_QIANKUN__) {
  window['sub-app6'] = { bootstrap, mount, unmount };
}
