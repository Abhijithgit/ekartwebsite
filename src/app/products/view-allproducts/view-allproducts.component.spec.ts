import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllproductsComponent } from './view-allproducts.component';

describe('ViewAllproductsComponent', () => {
  let component: ViewAllproductsComponent;
  let fixture: ComponentFixture<ViewAllproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
