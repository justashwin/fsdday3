import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks={
    tName:'',
    tTime:'',
    tAbc:'',
  }
task(){
  console.log(this.tasks)
}
}
