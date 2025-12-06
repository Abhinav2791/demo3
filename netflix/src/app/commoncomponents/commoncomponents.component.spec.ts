import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncomponentsComponent } from './commoncomponents.component';

describe('CommoncomponentsComponent', () => {
  let component: CommoncomponentsComponent;
  let fixture: ComponentFixture<CommoncomponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommoncomponentsComponent]
    });
    fixture = TestBed.createComponent(CommoncomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
