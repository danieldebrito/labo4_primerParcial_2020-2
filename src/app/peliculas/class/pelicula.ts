import { Actor } from 'src/app/actores/class/actor';
import { Pais } from 'src/app/paises/class/pais';

export class Pelicula {
    constructor(
        public id?: string,
        public nombre?: string,
        public genero?: string,
        public fechaestreno?: string,
        public foto?: string,
        public actores?: Actor[],
        public pais?: Pais
    ) { }
}
