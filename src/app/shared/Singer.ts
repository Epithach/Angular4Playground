import { Artist } from './Artist'
import { MusicType } from  './MusicType'

export class Singer implements Artist {
    id: number;
    displayName: string;
    fullName: string;
    rating: number;
    musicType = [
        MusicType.Pop
    ];
}