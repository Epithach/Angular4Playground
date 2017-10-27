import {ArtistListComponent} from './artist-list/artist-list.component';
import {ArtistDeleteComponent} from './artist-delete/artist-delete.component';
import {ArtistCreateComponent} from './artist-create/artist-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistUpdateComponent } from './artist-update/artist-update.component';


const routes: Routes = [
    { path: '', component: ArtistListComponent },    
    {
    path: 'artist',
    component: ArtistsComponent,
    // children: [
    //   { path: '', component: ArtistListComponent },
    //   { path: 'create', component: ArtistCreateComponent },
    //   { path: 'delete/:id', component: ArtistDeleteComponent },
    //   { path: 'update/:id', component: ArtistUpdateComponent },
    // ]
  },
  { path: 'artist/create', component: ArtistCreateComponent },
  { path: 'artist/update/:id', component: ArtistUpdateComponent },
  { path: 'artist/delete/:id', component: ArtistDeleteComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }