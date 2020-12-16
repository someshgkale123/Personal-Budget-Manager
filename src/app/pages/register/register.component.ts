import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{

  email = "";
  password = "";
  message = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  clearerror()
  {
    this.errorMessage = '';
    this.error = {name: '', message: ''};

  }
  register()
  {
    this.clearerror();
    if(this.validateForm(this.email, this.password))
    {
      this.authservice.registeremail(this.email, this.password)
      .then(() =>
      {
        this.message = "You created an Account",
        this.router.navigate(['/dashboard']);
      }).catch(_error =>
      {
        this.error=_error
        this.router.navigate(['/register']);
      });
    }
  }
  validateForm(email, password)
  {
    if(email.length === 0)
    {
      this.errorMessage = "Please enter your email id";
      return false;
    }
    if(password.length === 0)
    {
      this.errorMessage = "Please enter your password";
      return false;
    }
    if(password.length < 6)
    {
      this.errorMessage = "Password must be atleast 6 digits";
      return false;
    }
    this.errorMessage = '';
    return true;
  }
}
