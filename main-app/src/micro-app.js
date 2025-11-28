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
    entry: '//localhost:8085',
    container: '#subapp-container',
    activeRule: '/sub-app3',
  },
]);

// 启动 qiankun
start();
