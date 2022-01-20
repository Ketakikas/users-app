import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceiptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("[Request Interceptor]:",req);
        const clonedReq=req.clone({
            params:new HttpParams().set("auth","bearer token")//JwtToken
        })
       return next.handle(clonedReq);
    }
    
}