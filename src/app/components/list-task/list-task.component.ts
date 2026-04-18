import { Task } from 'src/models/task.model';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { CommonModule } from '@angular/common';
import { IonButton, ModalController } from "@ionic/angular/standalone";
import { DetailTaskComponent } from '../detail-task/detail-task.component';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
  imports: [IonButton, CommonModule, AddTaskComponent]
})
export class ListTaskComponent implements OnInit {
  message = 'This modal example uses the modalController to present and dismiss modals.';

  tasks: Task[] = []
  constructor(
    private taskService: TaskService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  async openModal(task: Task) {
    console.log('TASK ENVOYÉE 👉', task); // 👈 DEBUG
    const modal = await this.modalCtrl.create({
      component: DetailTaskComponent,
      componentProps: {
        task: task   // ⚠️ doit s’appeler EXACTEMENT "task"
      }
    });
    modal.present();

  }
}
