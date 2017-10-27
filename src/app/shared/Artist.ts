import { MusicType } from './MusicType'

export interface Artist {
    id: number;
    displayName: string;
    fullName: string;
    rating: number;
    musicType: MusicType[];
}