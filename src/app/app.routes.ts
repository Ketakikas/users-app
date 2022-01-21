import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NotesComponent } from "./components/notes/notes.component";
import { PostsComponent } from "./components/posts/posts.component";
import { OverviewComponent } from "./components/products/overview/overview.component";
import { ProductsComponent } from "./components/products/products.component";
import { SpecificationComponent } from "./components/products/specification/specification.component";
import { RegisterComponent } from "./components/register/register.component";
import { UsersComponent } from "./components/users/users.component";
import { PostRosolveService } from "./services/guard/post-rosolve.service";
import { DeactivatedRouteService } from "./services/guard/deactivated-route.service";
import { LoginGaurdService } from "./services/guard/login-gaurd.service";

export const APP_Routes:Routes=[
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"users",
        component:UsersComponent,
        canActivate:[LoginGaurdService]
    },
    {
        path:"register",
        component:RegisterComponent,
        canDeactivate:[DeactivatedRouteService]
    },
    {
        path:'products',
        component:ProductsComponent,
        children:[
            {
                path:'overview/:id/:prodName',
                component:OverviewComponent
            },
            {
                path:'specification',
                component:SpecificationComponent
            }
        ]
    },
    {
        path:"notes",
        component:NotesComponent
    },
    {
        path:"posts",
        component:PostsComponent,
        resolve: {posts:PostRosolveService}
    },
    {
        path:"lazy",
        loadChildren:()=>import('./modules/lazy/lazy.module').then(m=>m.LazyModule) //lazymodule added in lazy loading
    },
    {
        path:"**",                  //when no url ,matches then you can redirect to any url
        redirectTo:"/login"
    }
]