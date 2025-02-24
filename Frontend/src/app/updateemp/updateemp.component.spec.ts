import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateEmpComponent } from './updateemp.component';

describe('UpdateempComponent', () => {
  let component: UpdateEmpComponent;
  let fixture: ComponentFixture<UpdateEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
