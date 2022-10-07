import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailUserModel } from 'src/app/models/detailUser';
import { DetailUserComponent } from './detail-user.component';
import { of } from "rxjs";

const DetailUserModelMock = {
  getUserByName: (name: string) => of({})
}

describe('DetailUserComponent', () => {
  let component: DetailUserComponent;
  let fixture: ComponentFixture<DetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ DetailUserComponent ],
      providers: [
        { provide: DetailUserModel, useValue:  DetailUserModelMock},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user should has value after a subscription', () => {
    const detailUserSpy = spyOn(DetailUserModelMock, 'getUserByName');
    detailUserSpy.and.callFake(() => of({}))
    component.ngOnInit();
    expect(component.user).toBeTruthy();
    expect(detailUserSpy).toHaveBeenCalled();
  });
});
