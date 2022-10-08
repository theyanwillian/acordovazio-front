import {Player} from '../player/player.model';

export class Team {
    constructor(
        public name?: string,
        public coach?: string,
        public overall?: number,
        public players?: Player[]
    ) {
    }
}
