import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgIf, NgStyle} from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeFr)

@Component({
  selector: 'app-mod3demo2',
  imports: [
    FormsModule,
    NgIf,
    NgStyle,
    DatePipe
  ],
  templateUrl: './mod3demo2.html',
  styleUrl: './mod3demo2.css',
})
export class Mod3demo2 {

  public name : string
  public users : string[] //Array<string>
  public date : Date

  constructor() {
    this.users = []
    this.name = ''
    this.date = new Date()
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

  public removeUser(index : number){
    this.users.splice(index, 1)
  }
}
