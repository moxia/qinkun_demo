const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// 定义应用路径
const mainAppPath = path.join(__dirname, 'main-app');
const subApp1Path = path.join(__dirname, 'sub-app1');
const subApp2Path = path.join(__dirname, 'sub-app2');
const subApp3Path = path.join(__dirname, 'sub-app3');

// 定义颜色
const colors = {
  main: '\x1b[36m', // 青色
  sub1: '\x1b[32m', // 绿色
  sub2: '\x1b[35m', // 紫色
  sub3: '\x1b[33m', // 黄色
  reset: '\x1b[0m'  // 重置
};

// 启动应用函数
function startApp(appPath, name, color) {
  console.log(`${color}[${name}] 正在启动...${colors.reset}`);
  
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const child = spawn(npm, ['run', 'serve'], { cwd: appPath });
  
  child.stdout.on('data', (data) => {
    console.log(`${color}[${name}] ${data.toString().trim()}${colors.reset}`);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`${color}[${name}] 错误: ${data.toString().trim()}${colors.reset}`);
  });
  
  child.on('close', (code) => {
    console.log(`${color}[${name}] 进程退出，退出码 ${code}${colors.reset}`);
  });
  
  return child;
}

console.log('正在启动所有应用...');

// 启动子应用
const subApp1 = startApp(subApp1Path, 'sub-app1', colors.sub1);
const subApp2 = startApp(subApp2Path, 'sub-app2', colors.sub2);
const subApp3 = startApp(subApp3Path, 'sub-app3', colors.sub3);

// 等待一段时间后启动主应用，确保子应用已经启动
setTimeout(() => {
  const mainApp = startApp(mainAppPath, 'main-app', colors.main);
  
  // 处理进程退出
  process.on('SIGINT', () => {
    console.log('\n正在关闭所有应用...');
    mainApp.kill();
    subApp1.kill();
    subApp2.kill();
    subApp3.kill();
    process.exit(0);
  });
}, 3000); // 等待3秒后启动主应用

console.log('\n按 Ctrl+C 可以同时停止所有应用\n');
