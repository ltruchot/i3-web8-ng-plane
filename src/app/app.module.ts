import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PassagerComponent } from './passager/passager.component';
import { ListePassagerComponent } from './liste-passager/liste-passager.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HomepageComponent } from './homepage/homepage.component';
import { ItalieComponent } from './italie/italie.component';
import { NotfoundComponent } from './notfound/notfound.component';
registerLocaleData(localeFr);

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'passengers', component: ListePassagerComponent },
  { path: "italie", component: ItalieComponent },
  { path: "**", component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PassagerComponent,
    ListePassagerComponent,
    HomepageComponent,
    ItalieComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
