import { Component, OnInit } from '@angular/core';

import { Automovil } from 'src/app/modelo';
import { AUTOMOVILES } from 'src/app/data';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../servicios/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

   // Pagination
   page = 1;
   pageSize = 5;

  automoviles: Automovil[];
  automovilelegido: Automovil;

  constructor( private modalService: NgbModal, private autosService: AutosService ) { }

  ngOnInit() {
    this.getAutomoviles();
  }

  getAutomoviles(): void {
    this.autosService.getAutos().subscribe((responce) => {
      this.automoviles = responce.data;
    });
  }

  onSelect(automovil: Automovil, content): void {
    this.automovilelegido = automovil;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
