import {Artist} from './shared/Artist';
import { Headers, Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Artists } from './mock-artist'

@Injectable()
export class ArtistService {

    artistUrl = ""; // Url vers l'api
    artistlist = Artists;

    constructor(private http: Http) {

        (this.artistlist).forEach(element => {
            console.log("salut");
        });
     }
    
    getAllArtist() {
        return this.artistlist;
    }

    countArtists() {
        return this.artistlist.length;
    }

    getArtistById(id: number) {
        return this.artistlist[id];
    }

    getArtistsByMusicType(value: number) {
        var newList = new Array<Artist>();

        this.artistlist.forEach(tab => {
            tab.musicType.forEach(musicTypeTab => {
                if (musicTypeTab == value) {
                    newList.push(tab);
                }
            });
        });

        return newList;
    }

    createArtist(artist: Artist) {
        this.artistlist.push(artist);
    }

    updateArtist(artist: Artist) {
        this.artistlist[artist.id] = artist;
    }

    deleteArtist(id: number) {
        this.artistlist.splice(id);
    }
}