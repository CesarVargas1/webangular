import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosproductosComponent } from './nuestrosproductos.component';

describe('NuestrosproductosComponent', () => {
  let component: NuestrosproductosComponent;
  let fixture: ComponentFixture<NuestrosproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
