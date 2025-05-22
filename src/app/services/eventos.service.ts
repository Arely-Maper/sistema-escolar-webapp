import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FacadeService } from './facade.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private http: HttpClient,
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
    private facadeService: FacadeService
  ) { }

  public esquemaEvento(){
    return {
      'nombre_evento': '',
      'tipo_evento': '',
      'fecha_realizacion': '',
      'hora_inicio': '',
      'hora_final': '',
      'lugar_evento': '',
      'publico_objetivo_json': [],
      'programa_educativo': '',
      'responsable_evento': '',
      'descripcion_evento': '',
      'cupo_asistentes': ''
    }
  }

  //Validaciones formulario evento
  public validarEvento(data: any, editar: boolean){
    console.log("Validando evento... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["nombre_evento"])){
      error["nombre_evento"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["tipo_evento"])){
      error["tipo_evento"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["fecha_realizacion"])){
      error["fecha_realizacion"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["hora_inicio"])){
      error["hora_inicio"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["hora_final"])){
      error["hora_final"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["lugar_evento"])){
      error["lugar_evento"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["publico_objetivo_json"])){
      error["publico_objetivo_json"] = "Debes seleccionar al menos un público para poder registrarte";
    }

    if(!this.validatorService.required(data["programa_educativo"])){
      error["programa_educativo"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["responsable_evento"])){
      error["responsable_evento"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["descripcion_evento"])){
      error["descripcion_evento"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["cupo_asistentes"])){
      error["cupo_asistentes"] = this.errorService.required;
    }
  
    //Return arreglo
    return error;
  }

  //Aquí van los servicios HTTP
  //Servicio para registrar un nuevo usuario
  public registrarEvento (data: any): Observable <any>{
    var token = this.facadeService.getSessionToken();
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});
    return this.http.post<any>(`${environment.url_api}/eventos/`,data, httpOptions);
  }

  public obtenerListaEventos (): Observable <any>{
    var token = this.facadeService.getSessionToken();
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});
    return this.http.get<any>(`${environment.url_api}/lista-eventos/`, {headers:headers});
  }

    //Obtener un solo usuario dependiendo su ID
      public getEventoByID(idUser: Number){
        return this.http.get<any>(`${environment.url_api}/eventos/?id=${idUser}`,httpOptions);
      }
    
      //Servicio para actualizar un usuario
      public editarEvento (data: any): Observable <any>{
        var token = this.facadeService.getSessionToken();
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});
        return this.http.put<any>(`${environment.url_api}/eventos-edit/`, data, {headers:headers});
      } 
    
      // Eliminar Maestro
      public eliminarEvento(evento: number): Observable <any>{
        var token = this.facadeService.getSessionToken();
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});
        return this.http.delete<any>(`${environment.url_api}/eventos-edit/?id=${evento}`,{headers:headers});
      }
  

}