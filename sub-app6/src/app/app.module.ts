import { NgModule, RendererFactory2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDomRendererFactory2 } from './custom-renderer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: RendererFactory2,
      useClass: CustomDomRendererFactory2
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }