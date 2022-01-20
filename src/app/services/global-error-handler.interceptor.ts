import { HttpInterceptor } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandlerInterceptor implements ErrorHandler{
    handleError(error: any): void {
        console.log("Global error handler works");
        console.error(error);
    }

}