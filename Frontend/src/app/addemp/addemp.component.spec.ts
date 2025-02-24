import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpComponent } from './addemp.component';

describe('AddempComponent', () => {
  let component: AddEmpComponent;
  let fixture: ComponentFixture<AddEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
