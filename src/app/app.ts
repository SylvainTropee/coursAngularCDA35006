import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Demo1} from './mod3/demo1/demo1' ;
import {Mod3demo2} from './mod3/mod3demo2/mod3demo2';
import {Mod4demo1} from './mod4/mod4demo1/mod4demo1';

// import {Demo1 as Truc} from './mod1/demo1/demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo1, Mod3demo2, Mod4demo1,/*,Truc*/],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA35__006');
}
