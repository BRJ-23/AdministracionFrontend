import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministracionApiService } from 'src/app/administracion-api.service';

@Component({
  selector: 'app-mostrar-gastos-mes',
  templateUrl: './mostrar-gastos-mes.component.html',
  styleUrls: ['./mostrar-gastos-mes.component.scss']
})
export class MostrarGastosMesComponent implements OnInit {

  movimientosList$!:Observable<any[]>;

  constructor(private service:AdministracionApiService) { }

  ngOnInit(): void {
    this.movimientosList$ = this.service.getMovimientosPorCategoriaList(2,1);
  }

}
