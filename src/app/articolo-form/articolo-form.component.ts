import { Component, Output, EventEmitter } from '@angular/core';
import { Articolo} from '../articolo/articolo';

@Component({
  selector: 'articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent  {
  model = new Articolo();
  @Output() submit = new EventEmitter<Articolo>();
  constructor() { }

  inviaArticolo() {
   
    //alert("aggiunto3");
    this.submit.emit(this.model)
  }

 

}
