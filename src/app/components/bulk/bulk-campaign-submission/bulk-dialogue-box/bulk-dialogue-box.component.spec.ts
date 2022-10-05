import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDialogueBoxComponent } from './bulk-dialogue-box.component';

describe('BulkDialogueBoxComponent', () => {
  let component: BulkDialogueBoxComponent;
  let fixture: ComponentFixture<BulkDialogueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkDialogueBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkDialogueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
