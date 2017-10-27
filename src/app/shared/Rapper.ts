import { Artist } from "./Artist"
import { MusicType} from  './MusicType'

export class Rapper implements Artist {
    id: number;
    displayName: string;
    fullName: string;
    rating: number;
    musicType = [
        MusicType.Rap,
        MusicType.Trap
    ];
}