import { LocationService } from './services/location.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bulk-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  providers: [LocationService]
})
export class LocationComponent implements OnInit, OnChanges {


   //Location

  value = '';

  governorates = new FormControl('');
  governorateList!: string[];

  adminSections = new FormControl('');
  adminSectionList!: string[];

  sheiakhas = new FormControl('');
  sheiakhaList!: string[];


  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.governorateList = this.locationService.getGovernorateList();
    this.adminSectionList = this.locationService.getAdminSectionList();
    this.sheiakhaList = this.locationService.getSheiakhaList();
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("governorate list" + this.governorateList);
  }

}
