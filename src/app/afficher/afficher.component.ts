import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-afficher',
  standalone: true,
  imports: [],
  templateUrl: './afficher.component.html',
  styleUrl: './afficher.component.css'
})
export class AfficherComponent {
countries: any[] = [];

constructor(private http: HttpClient) {}

ngOnInit() {
this.http
.get<any[]>('https://countries.dev/countries?fields=name,capital,flags,area,population,alpha2Code')
.subscribe((data) => {

this.countries = data;
});
}
}