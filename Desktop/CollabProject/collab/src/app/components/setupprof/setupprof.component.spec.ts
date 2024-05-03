import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupprofComponent } from './setupprof.component';

describe('SetupprofComponent', () => {
  let component: SetupprofComponent;
  let fixture: ComponentFixture<SetupprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupprofComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
