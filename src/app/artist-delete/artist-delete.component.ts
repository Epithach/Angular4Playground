import {ArtistService} from '../artist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-delete',
  templateUrl: './artist-delete.component.html',
  styleUrls: ['./artist-delete.component.css']
})
export class ArtistDeleteComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  deleteArtist(id: number) {
    this.artistService.deleteArtist(id);
  }

}
