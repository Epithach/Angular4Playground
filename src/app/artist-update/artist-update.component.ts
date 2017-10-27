import {Artist} from '../shared/Artist';
import {ArtistService} from '../artist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-update',
  templateUrl: './artist-update.component.html',
  styleUrls: ['./artist-update.component.css']
})
export class ArtistUpdateComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  selectedArtist: Artist;

  ngOnInit() {
  }

  updateArtist(artist: Artist) {
    this.artistService.updateArtist(artist);
  }

}
