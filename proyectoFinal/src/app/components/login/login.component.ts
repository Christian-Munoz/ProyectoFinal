import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  login (form: NgForm) {
    try {
      if (!form.value.email || !form.value.password)
        throw 'Uno o mas campos estan vacios';

      this.userService.login(form.value).subscribe((res: any) => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
        console.log(res)
      },
      (err) => console.log(err));
    } catch (error) {
      alert(error);
      return;
    }
  }
}
