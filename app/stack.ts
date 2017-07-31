import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import { Card } from './card';

@Component({
    selector: 'my-stack',
    template: `
      <my-card *ngFor="let card of cards">
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
      </my-card>
    `
})

export class Stack implements OnInit {
  // maxlenght: number = 0;

  cards: Card[];
  errorMessage: string;

  constructor(private cardService: CardService) { }

  getData(): void {
    this.cardService.getData()
    .subscribe(
        cards => this.cards = cards,
        error => this.errorMessage = <any>error
     );
  }

  ngOnInit() {
    this.getData();
  }

}

//Error: No provider for String! Relosved with answer on https://stackoverflow.com/questions/39628768/angular-2-no-provider-for-string