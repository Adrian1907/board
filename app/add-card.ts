import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { ICard } from './interfaces/cardInterface';

@Component({
    selector: 'add-card',
    template: `
      <form>
        <input type="text" #titleInput required>
        <input type="text" #descrInput>
        <input type="number" value="0" min="0" #typeInput>
        <input type="number" value="0" min="0" #posInput>
        <button type="button" (click)="addItem(titleInput.value, descrInput.value, typeInput.value, posInput.value)">Add card</button>
      </form>
    `
})

export class AddCard {

  constructor(private cardService: CardService) {
     // this.log(cardService);
  }

  addItem(title: string, description: string, type: number = 0, position: number = 0) {
    // this.cardService.addData(title, description, type, position);
  }

  private log(msg: any) {
    console.log(msg);
  }

}