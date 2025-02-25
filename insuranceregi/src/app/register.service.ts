import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { UpdateUser } from './update-user';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  

  constructor(private httpClient:HttpClient) { }

  registerUser(user:User):Observable<boolean>
  {
    return this.httpClient.post<boolean>("http://localhost:9090/customers/register", user);
  }

  loginUser(login:Login)
  {
    return this.httpClient.post<boolean>("http://localhost:9090/customers/login",login);
  }
  getUser(userName:string):Observable<User>{

    // return this.httpClient.get<User>("http://localhost:9191/users/user/"+userId);

    return this.httpClient.get<User>("http://localhost:9090/customers/customer?userName="+userName);

    // return this.httpClient.get<User>("http://localhost:9191/users/profile?userId="+userName);

  }

  // forgetPassword(mailId: string):Observable<any> {
  //   let url="http://localhost:9090/forgot_password/"+mailId;
  //   return this.httpClient.get(url,{responseType: 'text'});
  // }
  updateProfile(user:User):Observable<UpdateUser>{

    return this.httpClient.post<UpdateUser>("http://localhost:9090/customers/update",user);
    }
  // updatePassword(login:Login):Observable<any>{
  //   let url = "http://localhost:9090/updatePassword";
  //   return this.httpClient.post(url, login);  
  // }
}
