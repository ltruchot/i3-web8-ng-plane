import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePassagerComponent } from './liste-passager.component';

describe('ListePassagerComponent', () => {
  let component: ListePassagerComponent;
  let fixture: ComponentFixture<ListePassagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePassagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
