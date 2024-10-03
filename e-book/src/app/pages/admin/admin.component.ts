import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-your-component',
  templateUrl: 'admin.component.html',
  standalone: true,
  imports:[FormsModule]
 
})
export class AdminComponent {
  name: string = '';
  gender: string = '';
  subType: string = '';
  status: string = '';



  constructor(private userService: UserService) {}

  onCreate() {
    
    this.userService.createUser(this.name, this.gender, this.subType, this.status);
    
    alert("User created")
    this.name = '';
    this.gender = '';
    this.subType = '';
    this.status = '';
  }
}
