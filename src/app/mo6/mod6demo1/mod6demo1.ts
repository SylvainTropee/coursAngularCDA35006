import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mod6demo1',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './mod6demo1.html',
  styleUrl: './mod6demo1.css',
})
export class Mod6demo1 {

  public form : FormGroup

  constructor() {
    this.form = new FormGroup(
      {
        email  : new FormControl('', [Validators.email, Validators.required]),
        password  : new FormControl('', [Validators.pattern(/^[a-z0-9]{8,}$/i), Validators.required]),
        date  : new FormControl('', [Validators.required]),//TODO control personnalisé date inférieur à date du jour
        newsletter  : new FormControl(true),
        job : new FormControl('chef', Validators.pattern(/^(dev|chef|admin)$/)),
        note : new FormControl(5, [Validators.min(0), Validators.max(10)])
      }
    )
  }

}
