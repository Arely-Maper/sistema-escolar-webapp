// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// //Import para los servicios HTTP
// import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// //Angular material
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatInputModule} from '@angular/material/input';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from '@angular/material/core';
// import {MatSelectModule} from '@angular/material/select';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// //Para usar el mask
// import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
// //Cambia el idioma a español
// import { MAT_DATE_LOCALE } from '@angular/material/core';

// import { RegistroUsuariosScreenComponent } from './screens/registro-usuarios-screen/registro-usuarios-screen.component';
// import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
// import { NavbarComponent } from './partials/navbar/navbar.component';
// import { RegistroAdminComponent } from './partials/registro-admin/registro-admin.component';
// import { RegistroAlumnosComponent } from './partials/registro-alumnos/registro-alumnos.component';
// import { RegistroMaestrosComponent } from './partials/registro-maestros/registro-maestros.component';
// import { AdminScreenComponent } from './screens/admin-screen/admin-screen.component';
// import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
// import { MaestrosScreenComponent } from './screens/maestros-screen/maestros-screen.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginScreenComponent,
//     RegistroUsuariosScreenComponent,
//     HomeScreenComponent,
//     NavbarComponent,
//     RegistroAdminComponent,
//     RegistroAlumnosComponent,
//     RegistroMaestrosComponent,
//     AdminScreenComponent,
//     AlumnosScreenComponent,
//     MaestrosScreenComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatButtonModule,
//     MatIconModule,
//     MatDividerModule,
//     FormsModule,
//     MatRadioModule,
//     MatInputModule,
//     NgxMaskDirective,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     MatSelectModule,
//     MatCheckboxModule,
//     HttpClientModule
//   ],
//   providers: [
//     {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
//     provideNgxMask()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Este import es para los servicios HTTP
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';






//Angular material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';


//Para usar el mask
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
//Cambia el idioma a español
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { RegistroUsuariosScreenComponent } from './screens/registro-usuarios-screen/registro-usuarios-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { RegistroAdminComponent } from './partials/registro-admin/registro-admin.component';
import { RegistroAlumnosComponent } from './partials/registro-alumnos/registro-alumnos.component';
import { RegistroMaestrosComponent } from './partials/registro-maestros/registro-maestros.component';
import { AdminScreenComponent } from './screens/admin-screen/admin-screen.component';
import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
import { MaestrosScreenComponent } from './screens/maestros-screen/maestros-screen.component';
import { GraficasScreenComponent } from './screens/graficas-screen/graficas-screen.component';
import { EliminarUserModalComponent } from './modals/eliminar-user-modal/eliminar-user-modal.component';
import { RegistroEventosComponent } from './partials/registro-eventos/registro-eventos.component';
import { EventosScreenComponent } from './screens/eventos-screen/eventos-screen.component';
import { EliminarEventoModalComponent } from './modals/eliminar-evento-modal/eliminar-evento-modal.component';
import { RegistroEventosScreenComponent } from './screens/registro-eventos-screen/registro-eventos-screen.component';

@NgModule({ declarations: [
        AppComponent,
        LoginScreenComponent,
        RegistroUsuariosScreenComponent,
        HomeScreenComponent,
        NavbarComponent,
        RegistroAdminComponent,
        RegistroAlumnosComponent,
        RegistroMaestrosComponent,
        AdminScreenComponent,
        AlumnosScreenComponent,
        MaestrosScreenComponent,
        GraficasScreenComponent,
        EliminarUserModalComponent,
        RegistroEventosComponent,
        EventosScreenComponent,
        EliminarEventoModalComponent,
        RegistroEventosScreenComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        FormsModule,
        MatRadioModule,
        MatInputModule,
        NgxMaskDirective,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule, // <-- Asegura que el módulo de fecha esté disponible
        NgxMatTimepickerModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule], providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
        provideNgxMask(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }