import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model'; //使用type 情楚表示是類型定義，但也可以不加

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>(); //指定泛型的型別，這樣會比較適當

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
