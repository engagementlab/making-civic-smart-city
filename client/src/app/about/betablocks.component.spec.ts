import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaBlocksComponent } from './about.component';

describe('AboutComponent', () => {
  let component: BetaBlocksComponent;
  let fixture: ComponentFixture<BetaBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
