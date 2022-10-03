import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}


@Component({
  selector: 'app-new-bulk-campaign',
  templateUrl: './bulk-new-campaign.component.html',
  styleUrls: ['./bulk-new-campaign.component.scss']
})
export class BulkNewCampaignComponent{
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  

 
  /////////////////////////////////////////////////////////

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
  ////////////////////////////////////////////////////////////////////////////////////
  //user plan

  corporate = false;
  personal = false;
  hybrid = false;
  prePaid = false;
  postPaid = false;
  others = false;

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  ////////////////////////////////////////////////////////////////////////////////////
  //ARPU
  minARPU = 0;
  maxARPU = 5000;
  selectedMinARPU = 'Clear me';
  selectedMaxARPU = 'Clear me';
////////////////////////////////////////////////////////////////////////////////////////////

  constructor() { }

  

  //user activity methods
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
  ////////////////////////////////////////////////////////////////////////

  ceil(number: any)
  {
    return Math.ceil(number);
  }

}
