import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

import { BoardPaisesComponent } from './paises/board-paises/board-paises.component';
import { PaisesListadoComponent } from './paises/board-paises/paises-listado/paises-listado.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent },
  {
    path: 'paises',
    component: BoardPaisesComponent,
    children:
      [{ path: '', component: PaisesListadoComponent },
      { path: 'listado', component: PaisesListadoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
