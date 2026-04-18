
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonHeader, IonButton, IonToolbar, IonTitle, IonCard, IonCardHeader, IonContent, IonButtons, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonLabel, IonBadge, IonNote } from '@ionic/angular/standalone';
import { Task, Priority } from 'src/models/task.model';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss'],
  imports: [IonHeader, IonTitle, IonButton, IonToolbar, IonContent, IonCard, IonCardHeader, IonButtons, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonBadge, IonLabel, IonNote, ]
})
export class DetailTaskComponent implements OnInit {
  @Input() task!: Task;

  priorities = Object.values(Priority);

  constructor(
    private taskService: TaskService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    this.task = this.taskService.getTaskById(this.task.id)!
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
