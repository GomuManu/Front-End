import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/modelo';
import { AutosService } from 'src/app/servicios/autos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  // Pagination
  page = 1;
  pageSize = 10;

  automoviles: Automovil[];
  automovilelegido: Automovil;

  constructor( private autosService: AutosService ) { }

  ngOnInit() {
    this.getAutomoviles();
  }

  getAutomoviles(): void {
    this.autosService.getAutos().subscribe((responce) => {
      this.automoviles = responce.data;
    });
  }

}
