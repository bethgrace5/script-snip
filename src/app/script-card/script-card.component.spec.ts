import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptCardComponent } from './script-card.component';

describe('ScriptCardComponent', () => {
  let component: ScriptCardComponent;
  let fixture: ComponentFixture<ScriptCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
