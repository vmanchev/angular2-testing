import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JokesService {

  constructor(private httpClient: HttpClient) {}

  getRandomJoke(): Observable<any> {
    return this.httpClient.get<any>('https://api.chucknorris.io/jokes/random');
  }
}
