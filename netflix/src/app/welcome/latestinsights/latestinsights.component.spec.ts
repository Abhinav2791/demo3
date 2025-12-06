import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestinsightsComponent } from './latestinsights.component';

describe('LatestinsightsComponent', () => {
  let component: LatestinsightsComponent;
  let fixture: ComponentFixture<LatestinsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestinsightsComponent]
    });
    fixture = TestBed.createComponent(LatestinsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
