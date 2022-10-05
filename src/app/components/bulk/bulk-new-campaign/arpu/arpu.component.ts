import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-arpu',
  templateUrl: './arpu.component.html',
  styleUrls: ['./arpu.component.scss']
})
export class ArpuComponent implements OnInit {

  minARPU = 0;
  maxARPU = 5000;
  selectedMinARPU = 'Clear me';
  selectedMaxARPU = 'Clear me';

  constructor() { }

  ngOnInit(): void {
  }

}
