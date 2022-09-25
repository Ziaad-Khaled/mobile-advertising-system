import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRealTimeCampaignComponent } from './new-real-time-campaign.component';

describe('NewRealTimeCampaignComponent', () => {
  let component: NewRealTimeCampaignComponent;
  let fixture: ComponentFixture<NewRealTimeCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRealTimeCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRealTimeCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
