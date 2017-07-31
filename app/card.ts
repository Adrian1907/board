import { Component } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Inject } from '@angular/core';
import { ICard } from './interfaces/cardInterface';

export const STRING = new InjectionToken('app.action');
export const NUMBER = new InjectionToken('app.action');

@Component({
    selector: 'my-card',
    template: `
    <div>
      <ng-content></ng-content>
    </div>
    `,
    styles: [``],
    providers: [ { provide: STRING, useValue: 'STRING'}, { provide: NUMBER, useValue: 'NUMBER'} ]
})

export class Card implements ICard {
  title: string = "";
  description: string = "";
  type: number = 0; //default type
  position: number = 0;

  constructor(
    @Inject(STRING) title: string,
    @Inject(STRING) description: string,
    @Inject(NUMBER) type: number = 0,
    @Inject(NUMBER) position: number = 0) {

    this.title = title;
    this.description = description;
    this.type = type;
    this.position = position;
  }
}