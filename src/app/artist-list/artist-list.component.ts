import {Artist} from '../shared/Artist';
import {ArtistService} from '../artist.service';
import { Component, OnInit } from '@angular/core';


@Component({
  
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[];

  constructor(private artistService: ArtistService) {
   }

  ngOnInit() {
    console.log("1");
      this.artists = this.getAllArtist();
    }

  getAllArtist(): Artist[] {
    console.log("2");
    return this.artistService.getAllArtist();
  }

  getArtistsByMusicType(value: number) {
    this.artistService.getArtistsByMusicType(value);
  }
}
