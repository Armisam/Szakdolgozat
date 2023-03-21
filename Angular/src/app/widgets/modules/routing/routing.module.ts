import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { RoutingComponent } from './routing.component';
import { FooldalComponent } from './components/fooldal/fooldal.component';
import { AoldalComponent } from './components/aoldal/aoldal.component';
import { BoldalComponent } from './components/boldal/boldal.component';

const Components = [
  RoutingComponent,
  FooldalComponent,
  AoldalComponent,
  BoldalComponent
];

const oldalak: Routes = [
  {
    path: "",
    component: FooldalComponent
  },
  {
    path: "aoldal",
    component: AoldalComponent
  },
  {
    path: "boldal",
    component: BoldalComponent
  },
]

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    RouterModule.forRoot(oldalak),
    BrowserModule,
  ],
  exports: [
    ...Components,
    RouterModule
  ],
  providers: []
})
export class RoutingModule { }
