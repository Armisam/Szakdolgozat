import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.scss']
})
export class TableGeneratorComponent {

  @Input()
  aktualisOldalElemek: any[] = [];

}

