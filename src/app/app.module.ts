import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegistrationComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
