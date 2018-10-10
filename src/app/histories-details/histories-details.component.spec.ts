import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriesDetailsComponent } from './histories-details.component';

describe('HistoriesDetailsComponent', () => {
  let component: HistoriesDetailsComponent;
  let fixture: ComponentFixture<HistoriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
