import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministracionApiService } from 'src/app/administracion-api.service';


@Component({
  selector: 'app-mostrar-gastos-ocio',
  templateUrl: './mostrar-gastos-ocio.component.html',
  styleUrls: ['./mostrar-gastos-ocio.component.scss']
})
export class MostrarGastosOcioComponent implements OnInit {

  movimientosList$!:Observable<any[]>;

  constructor(private service:AdministracionApiService) { }

  ngOnInit(): void {
    this.movimientosList$ = this.service.getMovimientosPorCategoriaList(3,1);
  }

}
