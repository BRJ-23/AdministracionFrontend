import {Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AdministracionApiService } from 'src/app/administracion-api.service';


@Component({
  selector: 'app-model-add-ingresos',
  templateUrl: './model-add-ingresos.component.html',
  styleUrls: ['./model-add-ingresos.component.scss']
})
export class ModelAddIngresosComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal, private service:AdministracionApiService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  @Input() movimiento:any;


  ngOnInit(): void {

  }

  addIngreso(){
    var miNombre = <HTMLInputElement>document.getElementById("nombre")
    
    var miValor = <HTMLInputElement>document.getElementById("valor")
    
    this.movimiento = {
      nombre: miNombre.value,
      valor: miValor.value,
      fecha: new Date,
      idUsuario: 1,
      idCategoria: 1,
      mes: 1,
      año: 2022,
      idTipoGasto: 1
    }

    this.service.addMovimiento(this.movimiento);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  guardarIngreso
}