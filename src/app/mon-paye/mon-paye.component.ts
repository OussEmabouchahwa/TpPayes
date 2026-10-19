import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-mon-paye',
  standalone: true,
  imports: [NgIf, JsonPipe],
  templateUrl: './mon-paye.component.html',
  styleUrl: './mon-paye.component.css'
})
export class MonPayeComponent {
  info: any;

constructor(private http: HttpClient) {}
ngOnInit() {
this.http
.get('https://countries.dev/ip')
.subscribe((data) => {

this.info = data;
});

}}