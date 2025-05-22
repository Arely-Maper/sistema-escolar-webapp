import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EliminarUserModalComponent } from 'src/app/modals/eliminar-user-modal/eliminar-user-modal.component';
import { FacadeService } from 'src/app/services/facade.service';
import { EventosService } from 'src/app/services/eventos.service';
import { } from '@angular/material';
import { EliminarEventoModalComponent } from 'src/app/modals/eliminar-evento-modal/eliminar-evento-modal.component';

@Component({
  selector: 'app-eventos-screen',
  templateUrl: './eventos-screen.component.html',
  styleUrl: './eventos-screen.component.scss',
  standalone: false
})
export class EventosScreenComponent implements OnInit{

  public name_user:string = "";
  public rol:string = "";
  public token : string = "";
  public lista_eventos: any[] = [];

  //Para la tabla
  displayedColumns: string[] = ['nombre_evento', 'tipo_evento', 'fecha_realizacion', 'hora_inicio', 'hora_final', 'lugar_evento', 'programa_educativo', 'responsable_evento', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource<DatosUsuario>(this.lista_eventos as DatosUsuario[]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public facadeService: FacadeService,
    public eventosService: EventosService,
    private router: Router,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.name_user = this.facadeService.getUserCompleteName();
    this.rol = this.facadeService.getUserGroup();
    //Validar que haya inicio de sesión
    //Obtengo el token del login
    this.token = this.facadeService.getSessionToken();
    console.log("Token: ", this.token);
    if(this.token == ""){
      this.router.navigate([""]);
    }
    //Obtener maestros
    this.obtenerEventos();
    //Para paginador
    this.initPaginator();
  }
  //Para paginación
  public initPaginator(){
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      //console.log("Paginator: ", this.dataSourceIngresos.paginator);
      //Modificar etiquetas del paginador a español
      this.paginator._intl.itemsPerPageLabel = 'Registros por página';
      this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
          return `0 / ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length}`;
      };
      this.paginator._intl.firstPageLabel = 'Primera página';
      this.paginator._intl.lastPageLabel = 'Última página';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.paginator._intl.nextPageLabel = 'Página siguiente';
    },500);
    //this.dataSourceIngresos.paginator = this.paginator;
  }

  //Obtener maestros
  public obtenerEventos(){
    this.eventosService.obtenerListaEventos().subscribe(
      (response)=>{
        this.lista_eventos = response;
        console.log("Lista eventos: ", this.lista_eventos);
        if(this.lista_eventos.length > 0){
          console.log("Eventos: ", this.lista_eventos);

          this.dataSource = new MatTableDataSource<DatosUsuario>(this.lista_eventos as DatosUsuario[]);
        }
      }, (error)=>{
        alert("No se pudo obtener la lista de Eventos");
      }
    );
  }

  public goEditar(idUser: number) {
    this.router.navigate(['registro-eventos/eventos/' +idUser]); // Editar evento
  }

  public delete(idUser: number) { //Se valida el rol del usuario dependiendo el tipo de usuario a eliminar
    const dialogRef = this.dialog.open(EliminarUserModalComponent, {
      data: { id: idUser, rol: 'administrador' }, //Se pasan valores a través del componente
      height: '288px',
      width: '328px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.isDelete) {
        console.log('Evento eliminado');
        //Recargar página
        window.location.reload();
      } else {
        alert('Evento no eliminado ');
        console.log('No se eliminó el Evento');
      }
    });
  }

  public deleteEvento(idUser: number) {
    const dialogRef = this.dialog.open(EliminarEventoModalComponent, {
      data: { id: idUser }, //Se pasan valores a través del componente
      height: '288px',
      width: '328px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.isDelete) {
        console.log('Evento eliminado');
        //Recargar página
        window.location.reload();
      } else {
        alert('Evento no eliminado ');
        console.log('No se eliminó el Evento');
      }
    });
    }
}



//Esto va fuera de la llave que cierra la clase
export interface DatosUsuario {
  id: number;
  nombre_evento: string;
  tipo_evento: string;
  fecha_realizacion: string;
  hora_inicio: string;
  hora_final: string;
  lugar_evento: string;
  programa_educativo: string;
  responsable_evento: string;
}

