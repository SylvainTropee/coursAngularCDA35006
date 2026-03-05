import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Joke} from './models/joke';
import {catchError, concatMap, distinctUntilChanged, map, retry, shareReplay, tap, timeout} from 'rxjs';

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
    return this.http.get<any>(`${this.BASE_URL}/random`).pipe(
      map(
        data =>{
          const joke : Joke = {
            iconUrl : data.icon_url,
            value : data.value
          }
          return joke
        }
      ),
      tap(
        //intéressant pour logger, pour setter des trucs
        data => {
          console.log(data)
        }
      ),
      concatMap(
        data => {
          return  this.http.get<any>(`${this.BASE_URL}/random`)
        }
      ),
      retry(3),
      timeout(20000),
      shareReplay(
        3
      ),
      distinctUntilChanged()

    )
  }

  public postJoke(){

    const joke : Joke = {
      iconUrl : "lkjfldsfksj",
      value : "ahah"
    }

    //ajout de paramètres optionnels
    const params = new HttpParams()
      .set('key', 'value')

    return this.http.post(`${this.BASE_URL}/random`, joke, {params : params})

  }


}
