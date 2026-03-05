import { Component } from '@angular/core';
import {Store} from '../store';

@Component({
  selector: 'app-mod8comp3',
  imports: [],
  templateUrl: './mod8comp3.html',
  styleUrl: './mod8comp3.css',
})
export class Mod8comp3 {

  public jokeLength

  constructor(private jokeStore : Store) {
    this.jokeLength = this.jokeStore.jokeLength
  }
}
