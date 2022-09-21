import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}


export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}


@Component({
  selector: 'app-new-bulk-campaign',
  templateUrl: './new-bulk-campaign.component.html',
  styleUrls: ['./new-bulk-campaign.component.scss']
})
export class NewBulkCampaignComponent implements OnInit {
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  //Location

  value = '';

  governorates = new FormControl('');
  governorateList: string[] = ['Cairo', 'Giza', 'Alex'];

  adminSections = new FormControl('');
  adminSectionList: string[] = ['الحوامدية', 'الساحل الشمالي', 'ظهير صحراوي البحيرة'];

  sheiakhas = new FormControl('');
  sheiakhaList: string[] = ['مركز الخانكة - مدينة الخانكة', 'مركز المناصرة - شياخة المناصرة', 'مركز ابشواي - مدينة ابشواي'];

  ////////////////////////////////////////////////////////////////////////////////////////
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];

  //handset objects to get them from the backend
  manufacturer_FilteredOptions!: Observable<User[]>;
  model_FilteredOptions!: Observable<User[]>;
  operatingSystem_FilteredOptions!: Observable<User[]>;
  deviceType_FilteredOptions!: Observable<User[]>;
  networkTechnology_FilteredOptions!: Observable<User[]>;
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

  ngOnInit() {
    //iterating over handset options
    this.manufacturer_FilteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

    this.model_FilteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

    this.operatingSystem_FilteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

    this.deviceType_FilteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

    this.networkTechnology_FilteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
    /////////////////////////////////////////////////////////
    
  }
  
  //handset
  //////////////////////////////////////////////////////////
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  ///////////////////////////////////////////////////////

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

}
