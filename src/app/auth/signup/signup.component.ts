import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
<<<<<<< HEAD
=======
import {AuthService} from '../auth.service';
>>>>>>> dev

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  isLoading = false;

<<<<<<< HEAD
  onSignup(form: NgForm) {
    console.log(form.value);
=======
  constructor(public authService: AuthService) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
>>>>>>> dev
  }
}
