import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './services//auth/auth.service';
import { AuthGuard } from './services//auth/auth-guard.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegisterComponent } from './views/register/register.component';
import { PostsListComponent } from './views/posts-list/posts-list.component';
import { PostService } from './services/post/post.service';
import { PostComponent } from './views/posts-list/post/post.component';
import { RegisterService } from './services/register/register.service';
import { EqualValidator } from './validator/equal-validator.directive';
import { NgbdModalContent } from './views/posts-list/post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ /* List of components being used in app */
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PostsListComponent,
    PostComponent,
    EqualValidator,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),  /* To show popup for edit post */

  ],
  providers: [AuthService,  /* Login service */
    AuthGuard,  /* Safeguard service to block direct access to dashboard */
    PostService,  /* Fetching data from firebase RTD */
    RegisterService], /* User sign up service  */
  bootstrap: [AppComponent,NgbdModalContent]
})
export class AppModule { }
