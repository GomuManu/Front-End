import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/modelo';
import { AutosService } from 'src/app/servicios/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';

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

  constructor( private autosService: AutosService, private modal: NgbModal ) { }

  ngOnInit() {
    this.autosService.getAutos().subscribe((responce) => {
      this.automoviles = responce.data;
    });
  }

  openModalEdtiar(auto: Automovil) {
      const modalRet = this.modal.open(ModalAddUpdateComponent, {centered: true});
      modalRet.componentInstance.auto = auto;
      modalRet.componentInstance.action = 'Editar';
      modalRet.result.then(
        (auto) => {
          this.autosService.updateAuto(auto).subscribe(response => console.log(response));
        },
        (reason) => {
          console.log(reason);
        }
      );
  }

  openModalAgregar() {
    const modalRet = this.modal.open(ModalAddUpdateComponent, {centered: true});
    modalRet.componentInstance.action = 'Agregar';
    modalRet.result.then(
      (auto) => {
        this.autosService.agregarAuto(auto).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason);
      }
    );
  }


openModalEliminar(auto: Automovil) {
  const modalRet = this.modal.open(ModalDeleteComponent, {centered: true});
  modalRet.componentInstance.auto = auto;
  modalRet.result.then(
      (auto) => {
        this.autosService.deleteAuto(auto).subscribe(response => {
        console.log(response) ;
        console.log('Se ha eliminado correctamente') ;
      })
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
