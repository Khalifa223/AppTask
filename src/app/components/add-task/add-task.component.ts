import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, Priority } from 'src/models/task.model';
import { TaskService } from 'src/services/task.service';
import { v4 as uuidv4 } from 'uuid';
import { IonSelectOption, IonHeader, IonButton, IonToolbar, IonTitle, IonCard, IonCardHeader, IonContent, IonButtons, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonLabel, IonBadge, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  imports: [IonSelectOption, IonHeader, IonTitle, IonButton, IonToolbar, IonContent, IonCard, IonCardHeader, IonButtons, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonBadge, IonLabel, IonNote, IonHeader, FormsModule, CommonModule ]
})
export class AddTaskComponent  implements OnInit {
  newTask: Task = this.initTask();
  priorities = Object.values(Priority);
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {}

  initTask(): Task {
    return {
      id: '',
      titre: '',
      description: '',
      statut: false,
      priorite: Priority.BASSE,
      dateCreation: '',
      dateEcheance: '',
      categorie: ''
    };
  }
  addTask() {
    console.log('addTask...')
    console.log(this.newTask);
    this.newTask.id = uuidv4();
    this.taskService.addTask(this.newTask);
    console.log(this.newTask);
    // this.newTask = this.initTask();
  }
}
