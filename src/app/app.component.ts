//definizione del ROOT COMPONENT
import { Component, OnInit } from '@angular/core';
import { Articolo } from './articolo/articolo';
import { ArticoliService } from './articoli.service'
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticoliService]
})
/* implementazione interfaccia oninit per gestire l'evento oninit facente parte del ciclo di vita del componente*/
export class AppComponent implements OnInit {
  title = 'app works!';
  myArticolo;
  elencoArticoli: Articolo[];
    /* inizializzazione oggetto articolo attraverso la valorizzazione della proprieta myarticolo 
    che verrà assegnata alla variabile @input articolo dalla proprietà del tag articolo in app.component.html */
    //qui viene iniettato il servizio articoli che si occupa della gestione degli articoli ossia logica business
  constructor(private articoliService:ArticoliService) {
    this.elencoArticoli = articoliService.getArticoli();
    //ricezione di un observable
   /* articoliService.getArticoli()
    .subscribe(result => {
      this.elencoArticoli = result;
    });*/
    //recezione con promise
    /*articoliService.getArticoli()
    .then(result =>{
                  this.elencoArticoli = result;
                });*/
    //this.elencoArticoli = [];
		this.myArticolo = {
			titolo: "Creare componenti Angular 2",
			autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti:0
		};
}
//questa è l'impementazione di un evento component
ngOnInit() {
  console.log("Il componente è in fase di inizializzazione!");
}
mostraMessaggioRingraziamento(Obj) {
  //alert("Grazie per aver espresso il tuo apprezzamento per l'articolo!  \n apprezzamenti raggiunti: ${event.numApprezzamenti} ";
	alert("Grazie per aver espresso il tuo apprezzamento per l'articolo!  \n apprezzamenti raggiunti: " + Obj.numApprezzamenti);
}
addArticolo(articolo) {
  /* qui chiamata ajax di inserimento articoli */
  //this.elencoArticoli.push(articolo); 
  this.articoliService.addArticolo(articolo);
 //alert("articolo aggiunto " + articolo.testo); 
}
}
