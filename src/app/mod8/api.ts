import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private readonly BASE_URL = 'https://api.chucknorris.io/jokes';


  constructor(private http : HttpClient) {
  }

  public getJoke(){
    return this.http.get<any>(`${this.BASE_URL}/random`)
  }

}
