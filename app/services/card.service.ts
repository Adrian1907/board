import { Injectable }      from '@angular/core'
import { Http, Response, Headers, RequestOptions }      from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Card } from '../card';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CardService {

    constructor (private _http: Http) {}

    private data: Card[] = [];
    cardsStorage: string = '../data/cards.json';

    //http request to cards.json file
    getData(): Observable<Card[]> {
        return this._http
            .get(this.cardsStorage)
            .map((response: Response) => <Card[]> response.json())
            // .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response): any {
        console.error(error);
        let message = 'Error status code ${error.status} at ${error.url}';
        return Observable.throw(message);
    }

    // addData(title: string, description: string, type: number = 0, position: number = 0): void {
    //     this.data.push( new Card(title, description, type, position) );
    // }

}