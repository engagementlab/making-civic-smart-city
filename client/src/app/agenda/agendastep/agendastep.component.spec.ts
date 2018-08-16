import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendastepComponent } from './agendastep.component';

describe('AgendastepComponent', () => {
  let component: AgendastepComponent;
  let fixture: ComponentFixture<AgendastepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendastepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendastepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
