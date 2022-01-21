import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

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
import { UserService } from './services/user.service';
import { CounterComponent } from './components/counter/counter.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { CustomoperatorObervableComponent } from './components/customoperator-obervable/customoperator-obervable.component';
import { ObservableOperatorsComponent } from './components/observable-operators/observable-operators.component';
import { SubjectsDemoComponent } from './components/subjects-demo/subjects-demo.component';
import { PostsComponent } from './components/posts/posts.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { ViewPostComponent } from './components/posts/view-post/view-post.component';
import { ResponseInterceptor } from './services/response.interceptor';
import { RequestInterceiptor } from './services/request.interceiptor';
import { RouterModule } from '@angular/router';
import { APP_Routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';

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
    EmployeeRegisterComponent,
    CounterComponent,
    ObservableDemoComponent,
    CustomoperatorObervableComponent,
    ObservableOperatorsComponent,
    SubjectsDemoComponent,
    PostsComponent,
    NewPostComponent,
    ViewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_Routes)
  ],
  providers: [UserService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:ResponseInterceptor,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:RequestInterceiptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
