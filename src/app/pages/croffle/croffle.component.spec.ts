import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroffleComponent } from './croffle.component';

describe('CroffleComponent', () => {
  let component: CroffleComponent;
  let fixture: ComponentFixture<CroffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CroffleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
