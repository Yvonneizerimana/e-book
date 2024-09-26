import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
