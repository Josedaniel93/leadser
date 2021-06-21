import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';




@NgModule({
  //On app module we declare all components we will call from here
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  //We import all modules we need
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MainModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
