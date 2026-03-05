import {computed, Injectable, signal} from '@angular/core';
import {Joke} from '../mod7/models/joke';
import {Api} from './api';

@Injectable({
  providedIn: 'root',
})
export class Store {

  private readonly _joke = signal<Joke | null>(null)
  public readonly joke = this._joke.asReadonly()

  public readonly jokeLength = computed(
    () => this._joke()?.value.length ?? 0
  )

  constructor(private api: Api) {
  }

  loadJoke() {
    this.api.getJoke().subscribe(
      data => this._joke.set(data)
    )
  }
}
