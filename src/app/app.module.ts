import {ArtistService} from './artist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ArtistDeleteComponent } from './artist-delete/artist-delete.component';

import { AppRoutingModule } from './app-routing.module';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistUpdateComponent } from './artist-update/artist-update.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    ArtistCreateComponent,
    ArtistDeleteComponent,
    ArtistUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
