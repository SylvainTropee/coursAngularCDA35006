import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-demo1',
  imports: [
    FormsModule
  ],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {

  public username : string
  public color : string

  constructor() {
    this.username = 'Michel'
    this.color = 'red'
  }

  public resetName() {
    this.username = ''
  }
}
