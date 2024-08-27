import { Component, Input, Output, EventEmitter, output } from '@angular/core';

// a. 使用type(類型)的方式，一次傳入多個參數
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// b. 使用interface(介面)的方式，一次傳入多個參數，在angular專案，介面比較常見
// 跟type相比，沒有 = 等號
interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>(); //指定泛型的型別，這樣會比較適當

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
