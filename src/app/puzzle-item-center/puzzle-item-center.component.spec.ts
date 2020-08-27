import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleItemCenterComponent } from './puzzle-item-center.component';

describe('PuzzleItemCenterComponent', () => {
  let component: PuzzleItemCenterComponent;
  let fixture: ComponentFixture<PuzzleItemCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleItemCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleItemCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
