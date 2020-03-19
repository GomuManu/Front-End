import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../../Modelos/modelo';
import { AUTOMOVILES } from '../../../Modelos/data';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {
  automoviles: Automovil[];
  automovilelegido: Automovil;

  constructor() { }

  ngOnInit() {
    this.getAutomoviles();
  }

  getAutomoviles(): void{
    this.automoviles = AUTOMOVILES;
  }

  onSelect(automovil: Automovil): void{
    this.automovilelegido = automovil;
  }

}
