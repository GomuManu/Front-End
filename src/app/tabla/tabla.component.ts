import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/modelo';
import { AUTOMOVILES } from 'src/app/data';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  automoviles: Automovil[];
  automovilelegido: Automovil;

  constructor() { }

  ngOnInit() {
    this.getAutomoviles();
  }

  getAutomoviles(): void {
    this.automoviles = AUTOMOVILES;
  }

}
