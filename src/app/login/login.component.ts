import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.loginError = false; // Clear login error flag
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        if (response.role === 'admin') {
          this.router.navigate(['/admin-landing-page']);
        } else {
          this.router.navigate(['/customer-landing-page']);
        }
      } else {
        this.loginError = true; // Set login error flag
      }
    });
  }
}
