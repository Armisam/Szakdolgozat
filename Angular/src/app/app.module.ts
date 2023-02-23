import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListerModule } from './widgets/modules/lister/lister.module';

const Widgets = [
  ListerModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...Widgets
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }