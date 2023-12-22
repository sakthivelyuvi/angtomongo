import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetidComponent } from './getid.component';

describe('GetidComponent', () => {
  let component: GetidComponent;
  let fixture: ComponentFixture<GetidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetidComponent]
    });
    fixture = TestBed.createComponent(GetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
