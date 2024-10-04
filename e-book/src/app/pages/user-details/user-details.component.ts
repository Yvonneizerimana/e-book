import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService: UserService){}

  selectedUser: User | null = null;
  
    ngOnInit() {
      // Subscribe to the event emitter in UserService
      this.userService.onUserDetailsClicked.subscribe((data: User) => {
        console.log('Received user:', data); // Log to verify data reception
        this.selectedUser = data; // Assign the received user
      });
    
    }
}
