import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonsubirComponent } from './botonsubir.component';

describe('BotonsubirComponent', () => {
  let component: BotonsubirComponent;
  let fixture: ComponentFixture<BotonsubirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonsubirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonsubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
