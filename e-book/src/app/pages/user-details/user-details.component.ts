import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  
})
export class UserDetailsComponent implements OnInit {
  selectedUser: User | null = null;

  // Correctly inject UserService in the constructor
  constructor(private userService: UserService) {}

  ngOnInit() {
    // Subscribe to the EventEmitter in the service to receive user details
    this.userService.onUserDetailsClicked.subscribe((user: User) => {
      this.selectedUser = user; // Store the received user details
      console.log(this.selectedUser); // Debugging output
    });
  }
}
