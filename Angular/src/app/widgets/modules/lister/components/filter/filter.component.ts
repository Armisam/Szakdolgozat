import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input()
  adatok: any[] = [];

  @Output() 
  kattintas = new EventEmitter<void>();

  id: number = 0;
  felhasznaloID: number = 0;
  leiras: string = "";
  teljesitve: boolean = false;

  szurogombKattintas() {
    this.kattintas.emit();
  }

  public szures() {    
    if (this.id !== null && (this.id < 1 || this.id > 201)) {
      alert("Az ID értékét kizárólag 1 és 200 között lehet megadni!");
      return this.adatok;
    }

    if (this.felhasznaloID !== null && (this.felhasznaloID < 0 || this.felhasznaloID > 10)) {
      alert("Az ID értékét kizárólag 1 és 10 között lehet megadni!");
      return this.adatok;
    }    
  
    return this.adatok.filter(feladat => {
      return (
        (this.id === null || feladat.id === this.id) &&
        (this.felhasznaloID === null || feladat.userId === this.felhasznaloID) &&
        (this.leiras === null || feladat.title.includes(this.leiras)) &&
        (this.teljesitve === false || feladat.completed === this.teljesitve)
      );  
    });
  }
  
}
