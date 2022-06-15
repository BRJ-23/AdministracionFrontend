import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministracionApiService } from 'src/app/administracion-api.service';


@Component({
  selector: 'app-mostrar-ahorros',
  templateUrl: './mostrar-ahorros.component.html',
  styleUrls: ['./mostrar-ahorros.component.scss']
})
export class MostrarAhorrosComponent implements OnInit {

  movimientosList$!:Observable<any[]>;

  constructor(private service:AdministracionApiService) { }

  ngOnInit(): void {
    this.movimientosList$ = this.service.getMovimientosPorCategoriaList(5,1);
  }

}

