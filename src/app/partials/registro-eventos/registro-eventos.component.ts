import { Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { FacadeService } from 'src/app/services/facade.service';
import { FormControl } from '@angular/forms';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';


declare var $:any;

@Component({
  selector: 'app-registro-eventos',
  templateUrl: './registro-eventos.component.html',
  styleUrls: ['./registro-eventos.component.scss'],
  standalone: false,
})
export class RegistroEventosComponent {
 
   @Input() rol: string = "";
   @Input() datos_user: any = {};
 
   public token: string = "";
   public editar:boolean = false;
   public idUser: Number = 0;
   //Check
   public valoresCheckbox: any = [];
   public publico_objetivo_json: any [] = [];

   //Registro Eventos variables
   public evento:any= {};
    public errors:any={};
    minDate: Date = new Date();
   //TIPO EVENTO
   public eventos: any[] = [
     {value: '1', viewValue: 'Conferencia'},
     {value: '2', viewValue: 'Taller'},
     {value: '3', viewValue: 'Seminario'},
     {value: '4', viewValue: 'Concurso'},
   ];
 
   //PUBLICO OBJETIVO
   public materias:any[] = [
     {value: '1', nombre: 'Estudiantes'},
     {value: '2', nombre: 'Profesores'},
     {value: '3', nombre: 'Público general'},
   ];

   //PROGRAMA EDUCATIVO
   public programas: any[] = [
     {value: '1', viewValue: 'Ingeniería en Ciencias de la Computación'},
     {value: '2', viewValue: 'Licenciatura en Ciencias de la Computación'},
     {value: '3', viewValue: 'Ingeniería en Tecnologías de la Información'},
   ];

  //  RESPONSABLE DEL EVENTO
  public responsables: any[] = [
      {value: '1', viewValue: 'Administrador'},
      {value: '2', viewValue: 'Maestro'},
    ];


   constructor(
     private location : Location,
     private eventosService: EventosService,
     private router: Router,
     public activatedRoute: ActivatedRoute,
     private facadeService: FacadeService
   ){
 
   }
 
   ngOnInit() {
     //El primer if valida si existe un parámetro en la URL
     if(this.activatedRoute.snapshot.params['id'] != undefined){
       this.editar = true;
       //Asignamos a nuestra variable global el valor del ID que viene por la URL
       this.idUser = this.activatedRoute.snapshot.params['id'];
       console.log("ID User: ", this.idUser);
       //Al iniciar la vista asignamos los datos del user
       this.evento = this.datos_user;
     }else{
       this.evento = this.eventosService.esquemaEvento();
      //  this.evento.rol = this.rol;
       this.token = this.facadeService.getSessionToken();
     }
     //Imprimir datos en consola
     console.log("Evento: ", this.evento);
   }
 
   public regresar(){
     this.location.back();
   }
  
   //Función para detectar el cambio de fecha
   public changeFecha(event :any){
     if (event.value < this.minDate) {
      this.evento.fecha_realizacion = null;
      this.errors.fecha_realizacion = "No puedes seleccionar una fecha anterior al día actual.";
    } else {
      this.errors.fecha_realizacion = "";
    }

     console.log("Fecha: ", this.evento.fecha_nacimiento);
   }
 
   public registrar(){
     //Validar
     this.errors = [];
 
     this.errors = this.eventosService.validarEvento(this.evento, this.editar);
     if(!$.isEmptyObject(this.errors)){
       return false;
     }
     //Aquí si todo es correcto vamos a registrar - aquí se manda a llamar al servicio
      this.eventosService.registrarEvento(this.evento).subscribe(
        (response)=>{
          alert("Evento registrado correctamente");
          console.log("Usuario registrado: ", response);
          if(this.token != ""){
            this.router.navigate(["home"]);
            }else{
              this.router.navigate(["/"]);
            }
        }, (error)=>{
          alert("No se pudo registrar evento");
        }
      )
   }
 
   public actualizar(){
     //Validación
     this.errors = [];
 
     this.errors = this.eventosService.validarEvento(this.evento, this.editar);
     if(!$.isEmptyObject(this.errors)){
       return false;
     }
     console.log("Pasó la validación");
 
     this.eventosService.editarEvento(this.evento).subscribe(
       (response)=>{
         alert("Evento editado correctamente");
         console.log("Evento editado: ", response);
         //Si se editó, entonces mandar al home
         this.router.navigate(["home"]);
       }, (error)=>{
         alert("No se pudo editar el maestro");
       }
     );
   }


 
  // FUNCIONES PUBLICO OBJETIVO
   public checkboxChange(event:any){
     //console.log("Evento: ", event);
     if(event.checked){
       this.evento.publico_objetivo_json.push(event.source.value)
     }else{
       console.log(event.source.value);
       this.evento.publico_objetivo_json.forEach((materia, i) => {
         if(materia == event.source.value){
           this.evento.publico_objetivo_json.splice(i,1)
         }
       });
     }
     console.log("Array materias: ", this.evento);
   }
 
   public revisarSeleccion(nombre: string){
     if(this.evento.publico_objetivo_json){
       var busqueda = this.evento.publico_objetivo_json.find((element)=>element==nombre);
       if(busqueda != undefined){
         return true;
       }else{
         return false;
       }
     }else{
       return false;
     }
   }

   //VALIDACIONES REQUERIMIENTOS FORMULARIO
   validarNombreEvento() {
    this.evento.nombre_evento = this.evento.nombre_evento.replace(/[^a-zA-Z0-9\s]/g, '');
  }

  verificarEntrada(event: KeyboardEvent) {
    const regex = /^[a-zA-Z0-9\s]$/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
}


}
