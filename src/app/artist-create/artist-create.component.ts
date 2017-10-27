import {ArtistService} from '../artist.service';
import {Artist} from '../shared/Artist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css']
})
export class ArtistCreateComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  createArtist(artist: Artist) {
    artist.id = this.artistService.countArtists() + 1;
    this.artistService.createArtist(artist);
  }
}
