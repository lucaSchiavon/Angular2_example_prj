/*
nel servizio deve risiedere tutta la logica di recupero e memorizzazione dati, tutta la logica business insomma
che non deve essere delegata al componente, il servizio verrà iniettato mediante la dependency injection nel costruttore del componente
e l'environment si occuperà di istanziarlo
*/
import { Injectable } from '@angular/core';
import { Articolo } from './articolo/articolo';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticoliService {
  private elencoArticoli: Articolo[];
  constructor(private http:Http) {
    this.elencoArticoli = [{
      titolo: "Creare componenti Angular 2",
      autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    },
    {
      titolo: "Creare servizi Angular 2",
      autore: "Roberto Bianchi",
      testo: "Anche creare servizi con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    }];
  }
  getArticoli(): Articolo[] {
    return this.elencoArticoli;
  }
  //get articoli con observable
  /*getArticoli(): Observable<Articolo[]> {
    return this.http
    .get("/api/articoli").map((responsedata)=>responsedata.json());
  }*/
  //get article con promise
 /* getArticoli(): Promise<Articolo[]> {
    return this.http
                .get("/api/articoli")
		    .toPromise()
		    .then(response => response.json());
  }*/
  addArticolo(articolo) {
    this.elencoArticoli.push(articolo)
  }
}
