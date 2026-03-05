import { Component } from '@angular/core';
import {Api} from '../api';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {Store} from '../store';

@Component({
  selector: 'app-mod8comp1',
  imports: [
    AsyncPipe
  ],
  templateUrl: './mod8comp1.html',
  styleUrl: './mod8comp1.css',
})
export class Mod8comp1 {

  public joke

  constructor(private jokeStore : Store) {
    this.joke = this.jokeStore.joke
  }

  loadJoke(){
    this.jokeStore.loadJoke()
  }
}
