import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
selector: 'app-rechercher',
standalone: true,
imports: [FormsModule],
templateUrl: './rechercher.component.html',
styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent {
nom: string = '';
resultat: any = null;
erreur: string = '';

constructor(private http: HttpClient) {}

recherche() {
this.resultat = null;
this.erreur = '';
this.http.get<any[]>(
`https://countries.dev/name/${this.nom}?fields=n
ame,capital,alpha2Code,flags,population,area`
).subscribe({
next: (data) => {
this.resultat = data[0];
},
error: () => {
this.erreur = 'Pays non trouvé';
}
});
}
}