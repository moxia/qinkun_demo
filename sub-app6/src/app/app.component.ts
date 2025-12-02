import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding: 20px;">
      <h1>Angular 微前端应用 (sub-app6)</h1>
      <p>这是一个使用 Angular 构建的微前端子应用</p>
      <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
        <h3>Angular 组件内容</h3>
        <p>当前时间: {{ currentTime | date:'medium' }}</p>
        <button (click)="updateTime()">更新时间</button>
      </div>
    </div>
  `,
  styles: [`
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover {
      background-color: #0056b3;
    }
  `],
  encapsulation: ViewEncapsulation.None // 禁用样式封装来避免沙箱冲突
})
export class AppComponent {
  currentTime: Date = new Date();

  updateTime() {
    this.currentTime = new Date();
  }
}