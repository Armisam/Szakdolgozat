import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.scss']
})
export class ListerComponent{

  @ViewChild
  (PaginatorComponent) paginator!: PaginatorComponent;

  @ViewChild
  (FilterComponent) szuro!: FilterComponent;

  adatok: any[] = [];

  szurtAdatok: any[] = [];
  aktualisOldalElemek: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe((valasz) => {
      this.adatok = valasz;
      this.szurtAdatok = this.adatok;
      this.aktualisOldalElemeinekBetoltese();
    }); 
  }

  aktualisOldalElemeinekBetoltese() {
    this.aktualisOldalElemek = this.paginator.AktualisElemekMutatasa(this.szurtAdatok);    
  }

  szurtAdatokFrissitese() {
    this.szurtAdatok = this.szuro.szures();
    this.paginator.aktualisOldalszam = 1;
    this.aktualisOldalElemeinekBetoltese();
  }

}
