import { User} from "../models/user"
import { LoggerMessage } from "./logger.service";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})

export class userService {
    Users: User[]=[
        new User ('Yvonne IZERIMANA','Female','Register','Active'),
        new User ('Divine UWAMAHORO','Female','Manager','Not Active'),
        new User ('Chinedu MALIMANA','Male','HOD','Active'),
        new User ('Kennedy MABUNGA','Male','HOD','Not Active'),
        new User ('Natalie NIMANDI','Female','CEO','Active'),
        new User ('Christopher MUGabe','Male','Manager','Not Active')
    ]
    constructor(private loggerMessage:LoggerMessage){

    }

    getAllUsers(){
        return this.Users;
    }

    createUser(name:string,gender:string,subType:string,status:string){
        let newUser=new User(name,gender,subType,status)
        this.Users.push(newUser) 
        this.loggerMessage.getMessage(name,status)

    }

    

}