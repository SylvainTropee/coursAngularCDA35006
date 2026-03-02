import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Demo1} from './mod3/demo1/demo1' ;

// import {Demo1 as Truc} from './mod1/demo1/demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo1/*,Truc*/],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursAngularCDA35__006');
}
