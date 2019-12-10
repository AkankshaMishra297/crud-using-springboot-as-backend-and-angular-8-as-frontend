import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new User("","",0,"");


  constructor(private http:HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }

  public editUser(user){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }




  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }


  setter(user:User){
    this.user=user;
  }

 getter(){
   return this.user;
 }
}
