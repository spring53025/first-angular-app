import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';

  users = DUMMY_USERS;

  selectUserId = 'u1';

  // 建立一個getter，用來取得選擇的user
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectUserId); // 使用驚嘆號，表示一定會找到
  }

  onSelectUser(id: string) {
    // console.log('Select user with id', id);
    // 這邊的id是從user.component.ts中的emit傳過來的
    this.selectUserId = id;
  }
}
