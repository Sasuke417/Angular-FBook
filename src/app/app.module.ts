import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoginComponent } from './Pages/login/login.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { HomeComponent } from './Pages/home/home.component';
import { NetworkComponent } from './Pages/network/network.component';
import { FriendsListComponent } from './Pages/friends-list/friends-list.component';
import { ProfileSettingsComponent } from './Pages/settings/SubPages/profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './Pages/settings/SubPages/change-password/change-password.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserComponent } from './Components/user/user.component';
import { NetworkUserComponent } from './Components/network-user/network-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NetworkComponent,
    FriendsListComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent,
    UsersListComponent,
    ResetPasswordComponent,
    SettingsComponent,
    NavbarComponent,
    UserComponent,
    NetworkUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
