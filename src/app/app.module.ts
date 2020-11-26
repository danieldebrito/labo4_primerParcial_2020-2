import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    PaisesDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
