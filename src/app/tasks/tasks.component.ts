import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({required: true}) name!: string;
  // @Input() name?: string;  //使用 JS ECMAScript 2020 的 optional chaining 新特性，可以是string或undefined
  @Input() name: string | undefined; //使用TS的union type，可以是string或undefined
}
