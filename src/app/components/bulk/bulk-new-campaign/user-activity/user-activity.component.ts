import { Component, OnInit } from '@angular/core';


export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-bulk-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {

  //user activity
  task: Task = {
    name: 'Select All',
    completed: false,
    subtasks: [
      {name: 'Using Data', completed: false},
      {name: 'Was Roaming', completed: false},
      {name: 'First Class', completed: false},
      {name: 'USIM', completed: false},
      {name: 'Orange Cash', completed: false},
    ],
  };
  allComplete: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

}
