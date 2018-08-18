import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsScreenComponent } from './scripts-screen.component';

describe('ScriptsScreenComponent', () => {
  let component: ScriptsScreenComponent;
  let fixture: ComponentFixture<ScriptsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
