import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './layout.component';

const Components = [
  LayoutComponent
];

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ...Components
  ],
  providers: []
})
export class LayoutModule { }
