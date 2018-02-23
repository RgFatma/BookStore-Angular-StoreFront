import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HomeComponent} from './components/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatListModule} from '@angular/material/list';
import { MyAccountComponent } from './components/my-account/my-account.component';

import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
   HttpModule,
   routing,
   FormsModule,
   MatGridListModule,
   MatInputModule,
   MatFormFieldModule,
   MatSelectModule,
   MatSlideToggleModule,
   MatListModule,
   MatTabsModule


  ],
  exports: [MatButtonModule, MatCheckboxModule],
  

  providers: [
  LoginService,
  UserService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

