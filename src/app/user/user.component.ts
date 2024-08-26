import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true}) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();
  @Output() select = new EventEmitter<string>(); //指定泛型的型別，這樣會比較適當
  // select = output<string>(); //不是一個signal，而是一個OutputEmitter
  // 比較新的方法，但建議如果使用@Input，才同時使用@Output

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
    // this.select.emit(2); //如果沒指定泛型的型別，這裡輸入int，則不會有錯誤提示
    //但是另一邊的onSelectUser(id: string) 方法會有問題
  }
}
