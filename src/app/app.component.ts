import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';

  users = DUMMY_USERS;
  selectedUserId?: string;

  // 建立一個getter，用來取得選擇的user
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId); // 使用驚嘆號，表示一定會找到
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
