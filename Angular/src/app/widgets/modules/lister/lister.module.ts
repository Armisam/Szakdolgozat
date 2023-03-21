import { NgModule } from '@angular/core';
import { ListerComponent } from './lister.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TableGeneratorComponent } from './components/table-generator/table-generator.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FilterComponent } from './components/filter/filter.component';

const Components = [
  ListerComponent
];

@NgModule({
  declarations: [
    ...Components,
    TableGeneratorComponent,
    PaginatorComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    ...Components
  ],
  providers: [
    PaginatorComponent,
    TableGeneratorComponent
  ]
})
export class ListerModule { }
