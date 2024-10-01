import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userService } from '../../services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent {
listOfUsers:any=''
  constructor(private userService:userService){
      
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

    
      
}
