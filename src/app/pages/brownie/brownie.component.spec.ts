import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownieComponent } from './brownie.component';

describe('BrownieComponent', () => {
  let component: BrownieComponent;
  let fixture: ComponentFixture<BrownieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrownieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrownieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
