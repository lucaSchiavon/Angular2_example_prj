import { Component, Input,NgModule } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';
import { Articolo } from '../articolo/articolo'

@Component({
  selector: 'articolo-form-reactive',
  templateUrl: './articolo-form-reactive.component.html',
  styleUrls: ['./articolo-form-reactive.component.css']
})

export class ArticoloFormReactiveComponent {
  myForm: FormGroup;
  @Input() model: Articolo;
  //approccio basato su formcontrol per definizione lato componente approccio reactive
  constructor() {
    this.model = new Articolo();
    this.myForm = new FormGroup({
      txtTitolo: new FormControl(),
      txtAutore: new FormControl(),
      txtTesto: new FormControl()
    });
    //registrazione di un gestore che mappa i valori correnti della form sul modello articolo
    /*
    this.myForm.valueChanges.subscribe(value => {
      this.model.titolo = value.txtTitolo;
      this.model.autore = value.txtAutore;
      this.model.testo = value.txtTesto;
    });*/
    //registrazione di un gestore che mappa un solo valore della form

    this.myForm.controls["txtTitolo"].valueChanges.subscribe(value => {
      this.model.titolo = value;
    });
  }



/*
approccio basato su form builder più sintetico di quello sopra basato su formcontrol
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
...
export class ArticoloFormReactiveComponent {
constructor(fb: FormBuilder) {
  this.myForm = fb.group({
    txtTitolo: ["Titolo dell'articolo"],
    txtAutore: ["",Validators.required],
    txtTesto: ["",[Validators.required,Validators.maxLength(30)]]
  });
}
}
*/

visualizzaArticolo() {
  console.log(this.myForm.value);
  //accedere ai singoli vlori della form in questo modo:
  alert(this.myForm.controls["txtTitolo"].value);
}
}