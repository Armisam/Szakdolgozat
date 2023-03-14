import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './widgets/modules/layout/layout.module';
import { ListerModule } from './widgets/modules/lister/lister.module';

const Widgets = [
  ListerModule,
  LayoutModule
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
