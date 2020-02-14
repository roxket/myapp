import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFirstComponent } from './form-first/form-first.component';

@NgModule({
  declarations: [
    // modulos -->  componentes (MVC) --> (V HTML CSS) | (M TS CLASES) | (C EXPRESS TSJS)
    AppComponent,
    FormFirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
