import { Routes } from '@angular/router';
import { AfficherComponent } from './afficher/afficher.component';
import { RechercherComponent } from'./rechercher/rechercher.component';
import { MonPayeComponent } from './mon-paye/mon-paye.component';
export const routes: Routes = [
    { path: 'afficher', component: AfficherComponent },
{ path: 'rechercher', component: RechercherComponent },
{path :'monPayes' ,component: MonPayeComponent}, 
];
