import { Component, OnInit } from '@angular/core';

import { Automovil } from 'src/app/modelo';
import { AUTOMOVILES } from 'src/app/data';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  automoviles: Automovil[];
  automovilelegido: Automovil;
  closeResult = '';

  constructor( private modalService: NgbModal ) { }

  ngOnInit() {
    this.getAutomoviles();
  }

  getAutomoviles(): void {
    this.automoviles = AUTOMOVILES;
  }

  onSelect(automovil: Automovil, content): void {
    this.automovilelegido = automovil;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
