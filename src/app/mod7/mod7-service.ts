import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke} from './models/joke';

@Injectable({
  providedIn: 'root',
})
export class Mod7Service {

  private readonly BASE_URL = 'https://api.chucknorris.io/jokes';


  constructor(private http : HttpClient) {
  }

  public getJoke(){
    return this.http.get<any>(`${this.BASE_URL}/random`)
  }

  public getJoke3(){
    return this.http.get<Joke>(`${this.BASE_URL}/random`)
  }


}
