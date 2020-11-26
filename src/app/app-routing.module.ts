import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

import { BoardPaisesComponent } from './paises/board-paises/board-paises.component';
import { PaisesListadoComponent } from './paises/board-paises/paises-listado/paises-listado.component';

import { ActoresComponent } from './actores/actores.component';
import { BoardActoresComponent } from './actores/board-actores/board-actores.component';
import { ActoresAltaComponent } from './actores/board-actores/actores-alta/actores-alta.component';

import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculasAltaComponent } from './peliculas/peliculas-board/peliculas-alta/peliculas-alta.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'paises',
    component: BoardPaisesComponent,
    children:
      [{ path: '', component: PaisesListadoComponent },
      { path: 'listado', component: PaisesListadoComponent }]
  },
  {
    path: 'actores',
    component: ActoresComponent,
    children:
      [{ path: '', component: ActoresComponent },
      { path: 'listado', component: BoardActoresComponent },
      { path: 'alta', component: ActoresAltaComponent }
    ]
  },
  {
    path: 'peliculas',
    component: PeliculasComponent,
    children:
      [{ path: '', component: PeliculasComponent },
      // { path: 'listado', component: BoardActoresComponent },
      { path: 'alta', component: PeliculasAltaComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
