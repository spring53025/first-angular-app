import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // A. property
  // selectedUser = DUMMY_USERS[randomIndex];

  // B. use signal to create a reactive property
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // A. zone.js getter function
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // B. use computed signal to get the image path
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    // click event handler
    // 每次點擊時，隨機選擇一個用戶
    console.log('Clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // A. this.selectedUser = DUMMY_USERS[randomIndex];

    // B. set the signal value
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
