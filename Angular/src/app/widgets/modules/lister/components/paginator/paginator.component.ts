import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent{

  @Output() 
  kattintas = new EventEmitter<void>();

  oldalmeret = 5;
  aktualisOldalszam = 1;
  maxOldal = 40;

  public AktualisElemekMutatasa(elemek: any[]) {
    return elemek.slice(this.aktualisOldalszam * this.oldalmeret - this.oldalmeret, this.aktualisOldalszam * this.oldalmeret);    
  }

  visszagombKattintas() {
    this.aktualisOldalszam--;
    this.kattintas.emit();
    
  }

  tovabbgombKattintas() {
    this.aktualisOldalszam++;
    this.kattintas.emit();
  }

  oldalMeretvaltoztatas() {
    this.aktualisOldalszam = 1;
    this.kattintas.emit();
  }
}
