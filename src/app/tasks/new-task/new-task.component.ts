import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule], //html 使用 ngModel 需要 import FormsModule
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  enteredTitle = signal(''); //使用 signal 來初始化，依樣效果
  enteredSummary = signal('');
  enteredDueDate = signal('');
  // enteredTitle = '';
  // enteredSummary = '';
  // enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }

}
