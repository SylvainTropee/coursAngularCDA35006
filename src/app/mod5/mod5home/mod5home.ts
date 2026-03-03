import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-mod5home',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './mod5home.html',
  styleUrl: './mod5home.css',
})
export class Mod5home {

  constructor(private router: Router) {
  }


  public goToDetail() {
    this.router.navigate(["/detail", 456])
    // this.router.navigateByUrl("/detail/456")
  }

}
