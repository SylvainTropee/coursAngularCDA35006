import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Demo1} from './mod3/demo1/demo1' ;
import {Mod3demo2} from './mod3/mod3demo2/mod3demo2';
import {Mod4demo1} from './mod4/mod4demo1/mod4demo1';
import {Mod6demo1} from './mo6/mod6demo1/mod6demo1';
import {Mod7demo1} from './mod7/mod7demo1/mod7demo1';
import {Mod8comp1} from './mod8/mod8comp1/mod8comp1';
import {Mod8comp2} from './mod8/mod8comp2/mod8comp2';
import {Mod8comp3} from './mod8/mod8comp3/mod8comp3';

// import {Demo1 as Truc} from './mod1/demo1/demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo1, Mod3demo2, Mod4demo1, Mod6demo1, Mod7demo1, Mod8comp1, Mod8comp2, Mod8comp3,/*,Truc*/],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA35__006');
}
