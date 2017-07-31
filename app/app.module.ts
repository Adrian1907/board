import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }   from '@angular/http';
import { CardService } from './services/card.service';
import { Board }   from './board';
import { Stack }   from './stack';
import { Card }   from './card';
import { AddCard }   from './add-card';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';


@NgModule({
    imports:      [ BrowserModule, DragulaModule, FormsModule, HttpModule, JsonpModule ],
    declarations: [ Board, Stack, Card, AddCard ],
    bootstrap:    [ Board ],
    providers: [ NgSpinningPreloader, CardService ]
})

export class AppModule { }