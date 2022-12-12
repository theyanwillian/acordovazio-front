import {Player} from '../player/player.model';

export class Team {
    constructor(
        public id?: number,
        public nome?: string,
        public coach?: string,
        public overall?: number,
        public caracteristica?: string,
        public stars?: number,
        public defensivo?: number,
        public ofensivo?: number,
        public sinergia?: number,
        public estrategia?: number,
        public caereo?: number,
        public tecnico?: number,
        public players?: Player[]
    ) {
    }
}
