import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';





@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  private user:User;


  constructor(private _userService:UserService,private _rotuer:Router) { }

  ngOnInit() {
    this.user=this._userService.getter();

  }
  processForm(){
    let resp=this._userService.editUser(this.user);

    resp.subscribe((data)=>this.user=data);  
    this._rotuer.navigate(['/find']);

   
  }
  /*processForm(){
    
   
    this._userService.editUser(this.user).subscribe((user)=>{
      console.log(user);
      this._rotuer.navigate(['/find']);
    },(error)=>{
      console.log(error);
    });

}*/

}
