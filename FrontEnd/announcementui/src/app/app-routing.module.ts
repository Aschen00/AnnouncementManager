import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementslistComponent } from './announcementslist/announcementslist.component';
import { AppComponent } from './app.component';
import { ApplieslistComponent } from './applieslist/applieslist.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LookingforjobComponent } from './lookingforjob/lookingforjob.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path:"manageAnnouncements", component:AnnouncementslistComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:"joblooking", component:LookingforjobComponent, canActivate:[AuthGuard],data:{roles:['User']}},
  {path:"manageApplies", component:ApplieslistComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"forbidden", component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }