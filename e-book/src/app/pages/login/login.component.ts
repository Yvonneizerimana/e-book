import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NgFor } from '@angular/common';
import { User } from '../../models/user';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent {
listOfUsers:any=''
  constructor(private userService:UserService){
      
  this.listOfUsers=userService.getAllUsers();
  console.log(this.listOfUsers) 
  }


  credentials={
    username: '',
    password: ''
  }

    onSubmit(){
      if(this.credentials.username !== "yvonne@gmail.com" && this.credentials.password !=="IZERIMANA@2024"){
        alert ('Invalid credentials');
        return;
      }
      else{
      alert ('Login successful');
      console.log (this.credentials);
      }
    }

      cancelThis(){
        this.credentials={username: '', password: ''}
      }

      showUserDetails(user:User){
       
       this.userService.onShowUserDetails(user)
       
        
      }
      
}
