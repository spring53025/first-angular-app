import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // property
  selectedUser = DUMMY_USERS[randomIndex];

  // getter function
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    // click event handler
    // 每次點擊時，隨機選擇一個用戶
    console.log('Clicked!');
    const randomIndex = Math.floor(Math.random() *  DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
