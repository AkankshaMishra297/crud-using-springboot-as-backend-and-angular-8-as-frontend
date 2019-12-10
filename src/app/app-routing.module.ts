import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {path:"register",component:RegistrationComponent},

  {path:"find",component:MainComponent},
  {path:"edit",component:UpdateUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
