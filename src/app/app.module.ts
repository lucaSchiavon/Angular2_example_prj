import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { ArticoloFormComponent } from './articolo-form/articolo-form.component';
import { ArticoloFormReactiveComponent } from './articolo-form-reactive/articolo-form-reactive.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TruncatePipe } from './truncate.pipe';
import { ArticoloListaComponent } from './articolo-lista/articolo-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    ArticoloFormComponent,
    ArticoloFormReactiveComponent,
    TruncatePipe,
    ArticoloListaComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ArticoloListaComponent
      },
      {
        path: 'nuovoArticolo',
        component: ArticoloFormComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
