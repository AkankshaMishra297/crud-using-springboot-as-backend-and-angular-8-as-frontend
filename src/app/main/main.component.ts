import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users:any;
  email:string;


  constructor(private service:UserService, private _router:Router) { }

  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

  public delteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }


   public findUserByEmailId(){
    let resp= this.service.getUserByEmail(this.email);
    resp.subscribe((data)=>this.users=data);
   }

   editUser(user){  
    this.service.setter(user);
    this._router.navigate(['/edit']);


  }
  


}
