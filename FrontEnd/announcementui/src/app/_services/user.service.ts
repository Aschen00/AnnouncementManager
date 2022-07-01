import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );
  constructor(private Httpclient: HttpClient, private userAuthService:UserAuthService) { }

  public login(loginData: any){
    return this.Httpclient.post("http://127.0.0.1:8080/authenticate", loginData, { headers: this.requestHeader });
  }


  public roleMatch(allowedRoles: string | any[]): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}
