import { Component, OnInit } from '@angular/core';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
// import { Stack } from './stack';
import { CardService } from './services/card.service';

@Component({
    selector: 'my-board',
    template: `
    <section class="board">
      <my-stack *ngFor="let stack of stacks; let i = index" [dragula]='"cards-bag"' [dragulaModel]=''>
        Stack loading...
       </my-stack>

      <!-- No cards message -->
      <mark *ngIf="!stacks.length">There aren't cards on your board</mark>

      <!-- Add card -->
      <add-card></add-card>
    </section>
    `,
    viewProviders: [DragulaService]
})

export class Board implements OnInit {

  maxlenght: number = 0;
  stacks: any = [,];

  constructor(private ngSpinningPreloader: NgSpinningPreloader) {
    // this.stacks = [new Stack(new CardService())];
    // this.stacks.push([new Stack(new CardService())]);
  }

  ngOnInit() {
    this.ngSpinningPreloader.stop();
  }

}