import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {UsersComponent} from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserButtonComponent } from './components/users/user-button/user-button.component';
import { ImageComponent } from './components/images/image/image.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesItemComponent } from './components/notes-item/notes-item.component';
import { NotesEditComponent } from './components/notes-edit/notes-edit.component';
import { CommentItemComponent } from './components/users/comment-item/comment-item.component';
import { AddCommentComponent } from './components/users/add-comment/add-comment.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import {HighlightDirectiveDirective} from './directives/highlight-directive.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { CountryCode } from './pipes/country-code.pipe';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    UserButtonComponent,
    ImageComponent,
    LifeCycleDemoComponent,
    NotesComponent,
    NotesItemComponent,
    NotesEditComponent,
    CommentItemComponent,
    AddCommentComponent,
    DirectiveDemoComponent,
    HighlightDirectiveDirective,
    UnlessDirective,
    PipeDemoComponent,
    AddNotesComponent,
    CountryCode,
    ReverseStringPipe,
    FilterPipe,
    SortPipe,
    LoginComponent,
    RegisterComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
