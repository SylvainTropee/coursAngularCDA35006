import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-mod3demo2',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './mod3demo2.html',
  styleUrl: './mod3demo2.css',
})
export class Mod3demo2 {

  public name : string
  public users : string[] //Array<string>

  constructor() {
    this.users = []
    this.name = ''
  }

  public addUser() {
    if (this.name){
      this.users.push(this.name)
      this.resetName()
    }
  }

  public resetName(){
    this.name = ''
  }
}
