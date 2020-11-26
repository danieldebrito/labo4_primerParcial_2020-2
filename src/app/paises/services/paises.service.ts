import { Injectable } from '@angular/core';
import { Pais } from 'src/app/paises/class/pais';
import { BaseService } from 'src/app/paises/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(public miHttp: BaseService) { }

  public ListarO(): Observable<Pais[]> {
    return this.miHttp.httpGetO<Pais[]>('/americas');
  }

}
