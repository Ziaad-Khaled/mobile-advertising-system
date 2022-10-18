
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueBoxComponent } from 'src/app/components/dialogue-box/dialogue-box.component';
import { RealTimeDialogueBoxComponent } from '../../real-time-locations/real-time-dialogue-box/real-time-dialogue-box.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface User {
  name: string;
}
@Component({
  selector: 'app-sender-data',
  templateUrl: './sender-data.component.html',
  styleUrls: ['./sender-data.component.scss']
})
export class SenderDataComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Orange'}, {name: 'My Orange'}, {name: 'Orange Cash'}];

  //handset objects to get them from the backend
  senderName_FilteredOptions!: Observable<User[]>;
  

  
  ngOnInit(): void {

    

    //iterating over handset options
    this.senderName_FilteredOptions = this.myControl.valueChanges.pipe(
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
}