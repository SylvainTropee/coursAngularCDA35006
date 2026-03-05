import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Api} from '../api';
import {AsyncPipe} from '@angular/common';
import {Store} from '../store';

@Component({
  selector: 'app-mod8comp2',
  imports: [
    AsyncPipe
  ],
  templateUrl: './mod8comp2.html',
  styleUrl: './mod8comp2.css',
})
export class Mod8comp2 {

  public joke

  constructor(private jokeStore : Store) {
    this.joke = this.jokeStore.joke
  }

  loadJoke(){
    this.jokeStore.loadJoke()
  }
}
