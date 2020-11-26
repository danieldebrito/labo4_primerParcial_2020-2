import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { BoardPaisesComponent } from './paises/board-paises/board-paises.component';
import { PaisesListadoComponent } from './paises/board-paises/paises-listado/paises-listado.component';
import { PaisesTablaComponent } from './paises/board-paises/paises-tabla/paises-tabla.component';
import { PaisesDetalleComponent } from './paises/board-paises/paises-detalle/paises-detalle.component';
import { BoardActoresComponent } from './actores/board-actores/board-actores.component';
import { ActoresAltaComponent } from './actores/board-actores/actores-alta/actores-alta.component';
import { ActoresBusquedaComponent } from './actores/board-actores/actores-busqueda/actores-busqueda.component';
import { ActoresListadoComponent } from './actores/board-actores/actores-listado/actores-listado.component';
import { ActoresComponent } from './actores/actores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    BoardPaisesComponent,
    PaisesListadoComponent,
    PaisesTablaComponent,
    PaisesDetalleComponent,
    BoardActoresComponent,
    ActoresAltaComponent,
    ActoresBusquedaComponent,
    ActoresListadoComponent,
    ActoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
