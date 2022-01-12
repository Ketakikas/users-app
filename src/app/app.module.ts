import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {UsersComponent} from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserButtonComponent } from './components/users/user-button/user-button.component';
import { ImageComponent } from './components/images/image/image.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    UserButtonComponent,
    ImageComponent,
    LifeCycleDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
