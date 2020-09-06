import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksFeedComponent } from './pages/books-feed/books-feed.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ErrorValidationComponent } from './components/error-validation/error-validation.component';
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    BooksFeedComponent,
    BookDetailComponent,
    ProfileComponent,
    UserDetailsComponent,
    ErrorValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    FormBuilder

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
