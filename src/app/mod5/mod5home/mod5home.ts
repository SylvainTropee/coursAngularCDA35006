import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-mod5home',
  imports: [
    RouterLink
  ],
  templateUrl: './mod5home.html',
  styleUrl: './mod5home.css',
})
export class Mod5home {

  constructor(private router: Router) {
  }


  public goToDetail() {
    this.router.navigate(["/detail"])
    // this.router.navigateByUrl("/detail")
  }

}
