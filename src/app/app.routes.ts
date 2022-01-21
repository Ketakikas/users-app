import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NotesComponent } from "./components/notes/notes.component";
import { UsersComponent } from "./components/users/users.component";

export const APP_Routes:Routes=[
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"users",
        component:UsersComponent
    },
    {
        path:"notes",
        component:NotesComponent
    },
    {
        path:"**",                  //when no url ,matches then you can redirect to any url
        redirectTo:"/login"
    }
]