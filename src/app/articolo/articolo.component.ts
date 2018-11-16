import { Component,Input,Output,EventEmitter, OnChanges,SimpleChange } from '@angular/core';
import { Articolo }  from './articolo'
@Component({
    selector: 'articolo',
    templateUrl: 'articolo.component.html',
    styleUrls: ['articolo.component.css']
})
export class ArticoloComponent implements OnChanges {
    /* decoratore input serve per valorizzare una proprietà da un componente esterno in questo caso app.component.ts */
  @Input() articolo: Articolo;
  /* dichiarazione dell'evento like   */
  //@Output() like = new EventEmitter<number>();
  @Output() like = new EventEmitter();
    constructor() {}
    /* l'oggetto changes che è voluto dall'implementazione interfaccia rappresenta l'elenco delle proprietà di input */
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) 
    {
      if (changes["articolo"] && changes["articolo"].currentValue.testo) 
      {
        let testoArticolo = changes["articolo"].currentValue.testo;
        changes["articolo"].currentValue.testo = testoArticolo.replace("è", "\xE9") ;
      }
    }
  /* definizione funzione associata ad evento click del componente articolo (vedi articolo.component.html) */
    incrementaApprezzamenti(event) {
      this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1;
      /* l'evento like viene scatenato  */
      //this.like.emit(this.articolo.numApprezzamenti);
      this.like.emit({numApprezzamenti: this.articolo.numApprezzamenti});
      event.preventDefault();
    }
}
