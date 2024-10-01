import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
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



  constructor(private userService: userService) {}

  onCreate() {
    // Call the userService to create a new user
    this.userService.createUser(this.name, this.gender, this.subType, this.status);
    // Reset form fields if needed
    this.name = '';
    this.gender = '';
    this.subType = '';
    this.status = '';
  }
}
