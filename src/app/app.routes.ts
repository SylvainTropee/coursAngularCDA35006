import { Routes } from '@angular/router';
import {Mod5home} from './mod5/mod5home/mod5home';
import {Mod5detail} from './mod5/mod5detail/mod5detail';
import {Mod5about} from './mod5/mod5about/mod5about';
import {mod5guardGuard} from './mod5/guards/mod5guard-guard';

export const routes: Routes = [
  {path : "", component : Mod5home},
  {path : "detail/:id", component : Mod5detail},
  {path : "about", component : Mod5about, canActivate : [mod5guardGuard]},
];
