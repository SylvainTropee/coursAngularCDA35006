import {ChangeDetectorRef, Component} from '@angular/core';
import {Mod7Service} from '../mod7-service';
import {Observable} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-mod7demo1',
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './mod7demo1.html',
  styleUrl: './mod7demo1.css',
})
export class Mod7demo1 {

  public joke: any
  public joke2$ : Observable<any>

  constructor(private jokeService: Mod7Service, private cdr : ChangeDetectorRef) {
    this.jokeService.getJoke().subscribe(
      value => {
        this.joke = value
        this.cdr.detectChanges()
      }
    )

    this.joke2$ = this.jokeService.getJoke()
  }
}
