import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroUsuariosScreenComponent } from './screens/registro-usuarios-screen/registro-usuarios-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
import { MaestrosScreenComponent } from './screens/maestros-screen/maestros-screen.component';
import { AdminScreenComponent } from './screens/admin-screen/admin-screen.component';
import { GraficasScreenComponent } from './screens/graficas-screen/graficas-screen.component';
import { RegistroEventosComponent } from './partials/registro-eventos/registro-eventos.component';
import { EventosScreenComponent } from './screens/eventos-screen/eventos-screen.component';
import { EliminarEventoModalComponent } from './modals/eliminar-evento-modal/eliminar-evento-modal.component';
import { RegistroEventosScreenComponent } from './screens/registro-eventos-screen/registro-eventos-screen.component';

const routes: Routes = [
  { path:'', component: LoginScreenComponent, pathMatch: 'full'},
  { path:'registro-usuarios', component: RegistroUsuariosScreenComponent, pathMatch: 'full'},
  { path: 'registro-usuarios/:rol/:id', component: RegistroUsuariosScreenComponent, pathMatch: 'full' }, // Permite ir al formulario de registro y que se llenen los campos según el rol del usuario
  { path:'home', component: HomeScreenComponent, pathMatch: 'full'},
  { path: 'alumnos', component: AlumnosScreenComponent, pathMatch: 'full' },
  { path: 'maestros', component: MaestrosScreenComponent, pathMatch: 'full' },
  { path: 'administrador', component: AdminScreenComponent, pathMatch: 'full' },
  { path: 'graficas', component: GraficasScreenComponent, pathMatch: 'full' },
  { path: 'eventos', component: EventosScreenComponent, pathMatch: 'full' }, //Se agrega enrutamiento para página eventos
  { path: 'registro-eventos', component: RegistroEventosComponent, pathMatch: 'full' },
  { path: 'registro-eventos/:rol/:id', component: RegistroEventosComponent, pathMatch: 'full' }, // Cambiado // Permite ir al formulario de registro y que se llenen los campos según el rol del usuario

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
