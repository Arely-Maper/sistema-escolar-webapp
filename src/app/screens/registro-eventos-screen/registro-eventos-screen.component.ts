import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service'; // Asegúrate de tener este servicio
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-registro-eventos-screen',
  templateUrl: './registro-eventos-screen.component.html',
  styleUrls: ['./registro-eventos-screen.component.scss'],
  standalone: false
})
export class RegistroEventosScreenComponent implements OnInit {
  public evento: any = {};
  public editar: boolean = false;
  public idEvento: number = 0;
  public errors:any={};
  public tipo_user:string = "";
  public token: string = "";
  public name_user:string = ""; 
  public rol:string = "";
  public user:any = {};
  @Input() tipo: string = "";


  constructor(
    private location : Location,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private facadeService: FacadeService,
    private eventosService: EventosService // Asegúrate de tener este servicio
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] !== undefined) {
      this.editar = true;
      this.idEvento = this.activatedRoute.snapshot.params['id'];
      this.obtenerEventoByID();
    }
  }

  obtenerEventoByID() {
    this.eventosService.getEventoByID(this.idEvento).subscribe(
      (response) => {
        this.evento = response;
        // Si necesitas adaptar campos, hazlo aquí
        // this.evento.fecha = response.fecha.split('T')[0];
        console.log('Datos evento:', this.evento);
      },
      (error) => {
        alert('No se pudieron obtener los datos del evento para editar');
      }
    );
  }

  
}