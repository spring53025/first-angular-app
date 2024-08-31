import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule], //html 使用 ngModel 需要 import FormsModule
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  // @Output() cancel = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  // @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  //不實例化，僅使用任務服務作為傳遞給注入的方式，所謂的注入令牌
  private tasksService = inject(TasksService);

  onCancel() {
    // this.cancel.emit();
    this.close.emit();
  }

  onSubmit() {
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   dueDate: this.enteredDueDate,
    // });

    // 從任務服務中添加任務
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, this.userId);
    this.close.emit();
  }
}
