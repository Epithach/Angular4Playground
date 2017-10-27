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

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  getAllArtist() {
    this.artistService.getAllArtist();
  }

  getArtistsByMusicType(value: number) {
    this.artistService.getArtistsByMusicType(value);
  }
}
