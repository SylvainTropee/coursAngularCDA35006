import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mod6demo1',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mod6demo1.html',
  styleUrl: './mod6demo1.css',
  standalone: true
})
export class Mod6demo1 {

  public form: FormGroup
  public name : string = ''

  constructor() {
    this.form = new FormGroup(
      {
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.pattern(/^[a-z0-9]{8,}$/i), Validators.required]),
        date: new FormControl('', [Validators.required, this.dateValidator]),
        newsletter: new FormControl(true),
        job: new FormControl('chef', Validators.pattern(/^(dev|chef|admin)$/)),
        note: new FormControl(5, [Validators.min(0), Validators.max(10)])
      }
    )
  }

  private dateValidator(control: AbstractControl) {
    if (control && control.value) {
      if (new Date() < new Date(control.value)) {
        return {greaterThan: true}
      }
    }
    return null
  }

  public onSubmit(){
    if(this.form.valid){
      //si valide on récupére les données et on envoie à un service
      console.log(this.form.value)
    }else{
      console.log("C'est pas bon !")
      this.form.markAllAsTouched()
    }

  }


  public checkName(event : Event) {
    console.log(event)
    if(this.name.trim().length < 3){
      console.log("Trop court !")
    }
  }
}
