import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the user search form is invalid if the form has been touched and has an empty value', () => {
    component.name.setValue('');
    component.name.markAllAsTouched();
    expect(component.name.valid).toBeFalse();
  });

  it('the user search form is invalid if the form has been touched and has global as value', () => {
    component.name.setValue('global');
    component.name.markAllAsTouched();
    expect(component.name.valid).toBeFalse();
  });

  it('the user search form is invalid if the form has been touched and has a value of less than 6 characters', () => {
    component.name.setValue('hola');
    component.name.markAllAsTouched();
    expect(component.name.valid).toBeFalse();
  });
});
