import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {

  public username : string;

  constructor() {
    this.username = "Raymond";
  }


  public changeUsername(){
    this.username = "Michel"
  }

}
