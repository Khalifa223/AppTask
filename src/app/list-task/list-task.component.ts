import { Task } from 'src/models/task.model';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
  imports: [CommonModule]
})
export class ListTaskComponent  implements OnInit {
  tasks: Task[] = []
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

}
