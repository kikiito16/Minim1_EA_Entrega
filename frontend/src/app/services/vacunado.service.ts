import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacunado } from '../models/vacunado'

@Injectable({
  providedIn: 'root'
})
export class VacunadoService {

  constructor(private http: HttpClient) { }

  getVacunados(): Observable<Vacunado[]>{
    return this.http.get<Vacunado[]>(environment.apiURL + "/vacunado");
  }

  getVacunado(id: String): Observable<Vacunado>{
    return this.http.get<Vacunado>(environment.apiURL + "/vacunado/" + id);
  }

  nuevoVacunado(nuevovacunado: Vacunado): Observable<any>{
    return this.http.post(environment.apiURL + '/vacunado/new', nuevovacunado);
  }

  modificarVacunado(vacunadomodificado: Vacunado, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/vacunado/update/" + id, vacunadomodificado);
  }
}
