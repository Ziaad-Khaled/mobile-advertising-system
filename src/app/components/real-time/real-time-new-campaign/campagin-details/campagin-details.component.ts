import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RealTimeDialogueBoxComponent } from '../../real-time-locations/real-time-dialogue-box/real-time-dialogue-box.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface User {
  name: string;
}
@Component({
  selector: 'app-campagin-details',
  templateUrl: './campagin-details.component.html',
  styleUrls: ['./campagin-details.component.scss']
})





export class CampaginDetailsComponent implements OnInit {
  minDate: Date;
  title = 'test-time';
  currentDate:any = new Date();
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];

  //handset objects to get them from the backend
  manufacturer_FilteredOptions!: Observable<User[]>;
  model_FilteredOptions!: Observable<User[]>;
  operatingSystem_FilteredOptions!: Observable<User[]>;
  deviceType_FilteredOptions!: Observable<User[]>;
  networkTechnology_FilteredOptions!: Observable<User[]>;

  constructor(public dialog:MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
    
   }

  ngOnInit(): void {

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
  }


  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  openDialog(): void {
    this.dialog.open(RealTimeDialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
}
