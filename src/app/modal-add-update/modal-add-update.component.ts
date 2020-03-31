import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../modelo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent {

  action: string;

  auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) {
  }

}
