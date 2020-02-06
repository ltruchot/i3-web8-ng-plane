import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassagerComponent } from './passager/passager.component';
import { ListePassagerComponent } from './liste-passager/liste-passager.component';

@NgModule({
  declarations: [
    AppComponent,
    PassagerComponent,
    ListePassagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
