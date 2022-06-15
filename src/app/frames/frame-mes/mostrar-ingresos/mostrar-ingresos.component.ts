import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministracionApiService } from 'src/app/administracion-api.service';

@Component({
  selector: 'app-mostrar-ingresos',
  templateUrl: './mostrar-ingresos.component.html',
  styleUrls: ['./mostrar-ingresos.component.scss']
})
export class MostrarIngresosComponent implements OnInit {

  movimientosList$!:Observable<any[]>;

  constructor(private service:AdministracionApiService) { }

  ngOnInit(): void {
    this.movimientosList$ = this.service.getMovimientosPorCategoriaList(3);
  }

}
