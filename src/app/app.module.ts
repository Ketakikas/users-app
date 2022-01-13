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
import { NotesComponent } from './components/notes/notes.component';
import { NotesItemComponent } from './components/notes-item/notes-item.component';
import { NotesEditComponent } from './components/notes-edit/notes-edit.component';
import { CommentItemComponent } from './components/users/comment-item/comment-item.component';
import { AddCommentComponent } from './components/users/add-comment/add-comment.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import {HighlightDirectiveDirective} from './directives/highlight-directive.directive';
import { UnlessDirective } from './directives/unless.directive';

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
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
