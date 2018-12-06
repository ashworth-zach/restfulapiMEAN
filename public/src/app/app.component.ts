import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = {};
  task = {};
  id = '';
  newTask: any;
  editTask = [];
  showEditForm = false;
  self = this;
  constructor(private _httpService: HttpService) { }
  tasksOnClick() {
    this._httpService.getTasks().subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data;
      console.log("Got our tasks!", this.tasks)
    })
  }
  taskOnClick(event: any){
    this.task = [];
    this.id = event.target.value;
    let observable = this._httpService.getTask(this.id)
    observable.subscribe(data => {
      console.log("Clicked the button!", this.id)
      this.task = data;
      console.log("Got our task!", this.task)
    })
  }
}
