import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidiodtComponent } from './vidiodt.component';

describe('VidiodtComponent', () => {
  let component: VidiodtComponent;
  let fixture: ComponentFixture<VidiodtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidiodtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidiodtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
