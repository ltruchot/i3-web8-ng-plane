import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalieComponent } from './italie.component';

describe('ItalieComponent', () => {
  let component: ItalieComponent;
  let fixture: ComponentFixture<ItalieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
