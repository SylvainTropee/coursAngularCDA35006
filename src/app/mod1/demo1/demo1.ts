import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 implements OnInit, AfterViewInit, OnDestroy {

  public username?: string;

  constructor() {
    //this.username = "Raymond";
  }

  ngOnDestroy(): void {
    console.log("Composant détruit")
  }

  ngAfterViewInit(): void {
    console.log("Vue chargée")
  }

  ngOnInit(): void {
    console.log("Initialisation des attibuts")
    this.username = "Raymond";
  }

  public changeUsername() {
    this.username = "Michel"
  }

}
