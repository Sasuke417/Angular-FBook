import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { ChangePasswordComponent } from './Pages/settings/SubPages/change-password/change-password.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { FriendsListComponent } from './Pages/friends-list/friends-list.component';
import { HomeComponent } from './Pages/home/home.component';
import { NetworkComponent } from './Pages/network/network.component';
import { ProfileSettingsComponent } from './Pages/settings/SubPages/profile-settings/profile-settings.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { SettingsComponent } from './Pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'friendsList', component: FriendsListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'usersList', component: UsersListComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'changePassword', component: ChangePasswordComponent },
      { path: 'profile', component: ProfileSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
