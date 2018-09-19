import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1WelcomeComponent } from './page1-welcome.component';

describe('Page1WelcomeComponent', () => {
  let component: Page1WelcomeComponent;
  let fixture: ComponentFixture<Page1WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1WelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
