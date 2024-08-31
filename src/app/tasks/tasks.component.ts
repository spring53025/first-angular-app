import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false; // : boolean 不是必須的

  //這種方式會每次都建立一個新的 TasksService 實例 ，不建議使用
   //建議使用這種方式
  //第一種
  // private tasksService = new TasksService();
  // private tasksService: TasksService;
  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService;
  // }
  //第二種 typescript 的快捷方式，只需要一行就可以完成上面的事情
  //不需要再寫 private tasksService: TasksService; 這行
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  // 變更 isAddingTask 為 true
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId);
    // 關閉新增 task 的表單
    this.isAddingTask = false;
  }
}
