import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministracionApiService {

  readonly administracionAPIUrl = "https://localhost:7021/api";

  constructor(private http:HttpClient) { }

  // Movimientos 
  getMovimientosList():Observable<any[]> {
    return this.http.get<any>(this.administracionAPIUrl + '/Movimientos');
  }

  addMovimiento(data:any)  {
    return this.http.post(this.administracionAPIUrl + 'Movimientos', data);
  }

  updateMovimiento(id:number|string, data:any) {
    return this.http.put(this.administracionAPIUrl + `/Movimientos/${id}`, data);
  }

  deleteMovimientos(id:number|string) {
    return this.http.delete(this.administracionAPIUrl + `/Movimientos/${id}`);
  }
}
