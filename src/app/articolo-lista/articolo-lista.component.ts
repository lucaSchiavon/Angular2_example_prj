import { Component} from '@angular/core';
import {ArticoliService} from '../articoli.service'
import { Http } from '@angular/http';
@Component({
  selector: 'app-articolo-lista',
  templateUrl: './articolo-lista.component.html',
  styleUrls: ['./articolo-lista.component.css'],
  providers: [ArticoliService]
})
export class ArticoloListaComponent {
  elencoArticoli;
  constructor(private articoliService: ArticoliService) {
    /*articoliService.getArticoli()
    .then(result =>{
                  this.elencoArticoli = result;
                });*/
     this.elencoArticoli =   articoliService.getArticoli();  
  }
}