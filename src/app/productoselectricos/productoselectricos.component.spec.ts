import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoselectricosComponent } from './productoselectricos.component';

describe('ProductoselectricosComponent', () => {
  let component: ProductoselectricosComponent;
  let fixture: ComponentFixture<ProductoselectricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoselectricosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoselectricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
