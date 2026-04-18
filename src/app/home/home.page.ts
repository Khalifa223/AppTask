import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItemDivider } from '@ionic/angular/standalone';
import { ListTaskComponent } from '../components/list-task/list-task.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonItemDivider, IonHeader, IonToolbar, IonTitle, IonContent, ListTaskComponent],
})
export class HomePage {
  constructor() {}
}
