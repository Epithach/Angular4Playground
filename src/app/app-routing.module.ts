import {ArtistListComponent} from './artist-list/artist-list.component';
import {ArtistDeleteComponent} from './artist-delete/artist-delete.component';
import {ArtistCreateComponent} from './artist-create/artist-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistUpdateComponent } from './artist-update/artist-update.component';


const routes: Routes = [
  { path: '', component: ArtistsComponent },  
  {
    path: 'artist',
    component: ArtistsComponent,
    children: [
      { path: '', component: ArtistListComponent },
      { path: 'create', component: ArtistCreateComponent },
      { path: 'delete', component: ArtistDeleteComponent },
      { path: 'update', component: ArtistUpdateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }