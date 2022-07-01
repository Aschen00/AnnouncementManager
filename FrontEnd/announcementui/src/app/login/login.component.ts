import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (resp: any) => {
        console.log(resp.jwtToken);
        console.log(resp.user.role);

        this.userAuthService.setRoles(resp.user.role);
        this.userAuthService.setToken(resp.jwtToken);

        const role = resp.user.role[0].roleName;
        if(role == 'Admin'){
          this.router.navigate(['/manageAnnouncements']);
        } else {
          this.router.navigate(['/joblooking']);
        }

      },
      (err) => {
        console.log(err);
      }
    );
  }

  
}
