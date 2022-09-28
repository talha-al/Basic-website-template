import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationStickyComponent } from './communication-sticky.component';

describe('CommunicationStickyComponent', () => {
  let component: CommunicationStickyComponent;
  let fixture: ComponentFixture<CommunicationStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationStickyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
