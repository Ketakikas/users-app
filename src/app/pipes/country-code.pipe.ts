import { Pipe, PipeTransform } from "@angular/core";

//this pipe actually adds country code to the mobile number.
@Pipe({
    name:"countryCode"
})
export class CountryCode implements PipeTransform{
    transform(value: any,code:string) {
        //console.log("Transformed",value);
        switch(code)
        {
            case "USA": return "+1-"+value;
            case "AUS": return "+12-"+value;
            case "EUR": return "+22-"+value;
            case "CHN":return "+31-"+value;
            default: return "+91-"+value;
        }
        return "+91-"+value;
    }
}