import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FirstPageComponent } from './first-page/first-page.component';
import {RouterModule} from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'first', component: FirstPageComponent},
      {path: 'second', component: SecondPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
