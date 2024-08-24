import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // 1. use signal input
  // avatar = input<string>();
  // name = input<string>();
  // 2. add required
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // use signal computed
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    // 使用signal時，內部唯獨屬性，不能被賦值，Property 'set' does not exist on type 'InputSignal<string>'
    // 所以此種情況建議使用Input decorator
    // this.avatar.set();
  }
}
