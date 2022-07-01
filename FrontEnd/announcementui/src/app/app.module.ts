import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementslistComponent } from './announcementslist/announcementslist.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Service1Service } from './service1.service';
import { FormsModule } from '@angular/forms';
import { LookingforjobComponent } from './lookingforjob/lookingforjob.component';
import { ApplieslistComponent } from './applieslist/applieslist.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UserService } from './_services/user.service';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AnnouncementslistComponent,
    LookingforjobComponent,
    ApplieslistComponent,
    LoginComponent,
    ForbiddenComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [Service1Service,
  AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  },
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

