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
  // @Input({ required: true}) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // 使用object的方式，一次傳入多個參數
  // @Input({ required: true}) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };
  // 使用type/interface的方式，一次傳入多個參數
  @Input({ required: true }) user!: User;

  // @Output() select = new EventEmitter();
  @Output() select = new EventEmitter<string>(); //指定泛型的型別，這樣會比較適當
  // select = output<string>(); //不是一個signal，而是一個OutputEmitter
  // 比較新的方法，但建議如果使用@Input，才同時使用@Output

  get imagePath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
    // this.select.emit(2); //如果沒指定泛型的型別，這裡輸入int，則不會有錯誤提示
    //但是另一邊的onSelectUser(id: string) 方法會有問題
  }
}
