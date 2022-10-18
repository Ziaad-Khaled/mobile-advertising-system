
import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueBoxComponent } from 'src/app/components/dialogue-box/dialogue-box.component';
import { RealTimeDialogueBoxComponent } from '../../real-time-locations/real-time-dialogue-box/real-time-dialogue-box.component';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SenderNameService } from 'src/app/components/shared/services/sender-name.service';


export interface Sender_Name {
  name: string;
}

@Component({
  selector: 'app-sender-data',
  templateUrl: './sender-data.component.html',
  styleUrls: ['./sender-data.component.scss']
})
export class SenderDataComponent implements OnInit, OnDestroy {

  constructor(public dialog:MatDialog, private senderNameService : SenderNameService) { }

  openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  myControl = new FormControl<string | Sender_Name>('');
  options!: Sender_Name[];
  senderNameSub!: Subscription;

  //handset objects to get them from the backend
  senderName_FilteredOptions!: Observable<Sender_Name[]>;
  

  
  ngOnInit(): void {
    this.options = this.senderNameService.getSenderNames();
    this.senderNameSub = this.senderNameService.senderNamesEmitter.subscribe(senderNames =>
      {
        console.log(senderNames);
        this.options = senderNames;
        this.displaySenderNames();      
      });
    
      this.displaySenderNames();
    }
    displayFn(user: Sender_Name): string {
      return user && user.name ? user.name : '';
    }

    displaySenderNames(){
            //iterating over sender names options
      this.senderName_FilteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
    }
  
    private _filter(name: string): Sender_Name[] {
      const filterValue = name.toLowerCase();
  
      return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }

    ngOnDestroy()
    {
      this.senderNameSub.unsubscribe();
    }
}