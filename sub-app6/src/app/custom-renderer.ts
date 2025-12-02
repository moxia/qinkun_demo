import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class CustomDomRendererFactory2 implements RendererFactory2 {
  private defaultRenderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // 创建基础渲染器
    this.defaultRenderer = this.createBaseRenderer();
  }

  private createBaseRenderer(): Renderer2 {
    return {
      data: {},
      destroyNode: null,
      createElement: (name: string, namespace?: string | null): any => {
        return namespace ? this.document.createElementNS(namespace, name) : this.document.createElement(name);
      },
      createComment: (value: string): any => this.document.createComment(value),
      createText: (value: string): any => this.document.createTextNode(value),
      appendChild: (parent: any, newChild: any): void => {
        this.safeAppendChild(parent, newChild);
      },
      insertBefore: (parent: any, newChild: any, refChild: any): void => {
        this.safeInsertBefore(parent, newChild, refChild);
      },
      removeChild: (parent: any, oldChild: any): void => {
        if (parent && oldChild && parent.removeChild) {
          parent.removeChild(oldChild);
        }
      },
      selectRootElement: (selectorOrNode: string | any): any => {
        if (typeof selectorOrNode === 'string') {
          const element = this.document.querySelector(selectorOrNode);
          if (!element) {
            throw new Error(`The selector "${selectorOrNode}" did not match any elements`);
          }
          return element;
        }
        return selectorOrNode;
      },
      parentNode: (node: any): any => node.parentNode,
      nextSibling: (node: any): any => node.nextSibling,
      setAttribute: (el: any, name: string, value: string, namespace?: string | null): void => {
        if (namespace) {
          el.setAttributeNS(namespace, name, value);
        } else {
          el.setAttribute(name, value);
        }
      },
      removeAttribute: (el: any, name: string, namespace?: string | null): void => {
        if (namespace) {
          el.removeAttributeNS(namespace, name);
        } else {
          el.removeAttribute(name);
        }
      },
      addClass: (el: any, name: string): void => el.classList.add(name),
      removeClass: (el: any, name: string): void => el.classList.remove(name),
      setStyle: (el: any, style: string, value: any, flags?: number): void => {
        el.style[style] = value;
      },
      removeStyle: (el: any, style: string, flags?: number): void => {
        el.style[style] = '';
      },
      setProperty: (el: any, name: string, value: any): void => {
        el[name] = value;
      },
      setValue: (node: any, value: string): void => {
        node.nodeValue = value;
      },
      listen: (target: any, eventName: string, callback: (event: any) => boolean | void): () => void => {
        target.addEventListener(eventName, callback as EventListener);
        return () => target.removeEventListener(eventName, callback as EventListener);
      }
    } as Renderer2;
  }

  private safeAppendChild(parent: any, newChild: any): void {
    try {
      if (parent && newChild && parent.appendChild) {
        parent.appendChild(newChild);
      }
    } catch (error) {
      // 处理 qiankun 沙箱冲突
      if (error instanceof Error && error.message.includes('contains')) {
        console.warn('qiankun sandbox blocked appendChild operation, using fallback');
        
        // 如果是 head 元素的操作，尝试添加到容器
        if (parent && parent.tagName === 'HEAD') {
          const qiankunContainer = this.document.querySelector('#subapp-container');
          if (qiankunContainer) {
            qiankunContainer.appendChild(newChild);
            return;
          }
        }
        
        // 最后的安全尝试
        if (parent && newChild) {
          parent.appendChild(newChild);
        }
      } else {
        throw error;
      }
    }
  }

  private safeInsertBefore(parent: any, newChild: any, refChild: any): void {
    try {
      if (parent && newChild && refChild && parent.insertBefore) {
        parent.insertBefore(newChild, refChild);
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('contains')) {
        console.warn('qiankun sandbox blocked insertBefore operation, using fallback');
        this.safeAppendChild(parent, newChild);
      } else {
        throw error;
      }
    }
  }

  createRenderer(hostElement: any, type: any): Renderer2 {
    return this.defaultRenderer;
  }
  
  begin(): void {}
  end(): void {}
}