import { Routes } from '@angular/router';
import {Mod5home} from './mod5/mod5home/mod5home';
import {Mod5detail} from './mod5/mod5detail/mod5detail';
import {Mod5about} from './mod5/mod5about/mod5about';

export const routes: Routes = [
  {path : "", component : Mod5home},
  {path : "detail", component : Mod5detail},
  {path : "about", component : Mod5about},
];
