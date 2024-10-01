import { Injectable} from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LoggerMessage{ 
    getMessage(name:string,status:string){
         alert(`the new user with the name of ${name} and status of ${status} was created successfuly`);
    }
    
}