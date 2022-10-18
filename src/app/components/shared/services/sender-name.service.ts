import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Sender_Name {
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class SenderNameService {

  senderNames : Sender_Name[] = [{name: 'Orange'}, {name: 'My Orange'}, {name: 'Orange Cash'}];
  senderNamesEmitter = new Subject<Sender_Name[]>();

  constructor() { }

  getSenderNames()
  {
    return this.senderNames.slice();
  }

  addSenderName(newSenderName: Sender_Name)
  {
    this.senderNames.push(newSenderName)
    this.senderNamesEmitter.next(this.senderNames);
  }
}
