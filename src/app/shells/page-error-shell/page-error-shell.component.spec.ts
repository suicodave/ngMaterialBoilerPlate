import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrorShellComponent } from './page-error-shell.component';

describe('PageErrorShellComponent', () => {
  let component: PageErrorShellComponent;
  let fixture: ComponentFixture<PageErrorShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageErrorShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageErrorShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
