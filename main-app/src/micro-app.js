import { registerMicroApps, start } from 'qiankun';

// 注册子应用
registerMicroApps([
  {
    name: 'sub-app1', // 子应用的名称
    entry: '//localhost:8081', // 子应用的访问地址
    container: '#subapp-container', // 子应用的挂载点
    activeRule: '/sub-app1', // 子应用的激活规则
  },
  {
    name: 'sub-app2',
    entry: '//localhost:8082',
    container: '#subapp-container',
    activeRule: '/sub-app2',
  },
  {
    name: 'sub-app3',
    entry: '//localhost:8083',
    container: '#subapp-container',
    activeRule: '/sub-app3',
  },
  {
    name: 'sub-app4',
    entry: '//localhost:8084',
    container: '#subapp-container',
    activeRule: '/sub-app4',
  },
  {
    name: 'sub-app5',
    entry: '//localhost:8085',
    container: '#subapp-container',
    activeRule: '/sub-app5',
  },
  {
    name: 'sub-app6',
    entry: '//localhost:8087',
    container: '#subapp-container',
    activeRule: '/sub-app6',
  },
]);

// 启动 qiankun
start();