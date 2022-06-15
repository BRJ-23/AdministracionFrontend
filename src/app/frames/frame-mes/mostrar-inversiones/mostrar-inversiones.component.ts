import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministracionApiService } from 'src/app/administracion-api.service';


@Component({
  selector: 'app-mostrar-inversiones',
  templateUrl: './mostrar-inversiones.component.html',
  styleUrls: ['./mostrar-inversiones.component.scss']
})
export class MostrarInversionesComponent implements OnInit {

  movimientosList$!:Observable<any[]>;

  constructor(private service:AdministracionApiService) { }

  ngOnInit(): void {
    this.movimientosList$ = this.service.getMovimientosPorCategoriaList(4,1);
  }

}
