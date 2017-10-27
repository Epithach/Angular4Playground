import {ArtistService} from '../artist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  getArtistById(id: number) {
    return this.artistService.getArtistById(id);
  } 
}
