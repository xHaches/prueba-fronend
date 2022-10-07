import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user';
import { take } from 'rxjs/operators';
import { UserToList } from 'src/app/shared/interfaces/user-from-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    // Validators.pattern(/^global/)
  ]);

  displayedColumns: string[] = ['id', 'name', 'url', 'options'];
  dataSource: UserToList[] = [];

  constructor(
    private userService: UserModel,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Debes ingresar un nombre';
    }
    if (this.name.hasError('minlength')) {
      return 'Debe ser mayor a 5 caracteres';
    }
    if(this.name.value === 'global') {
      return 'El nombre ingresado no es válido';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }

  search() {
    if(this.name.invalid) {
      this.name.markAllAsTouched();
      return;
    }
    this.userService.getUsersByName(this.name.value).pipe(
      take(1)
    ).subscribe(users => {
      this.dataSource = users.map((user) => {
        user.options = 'ver';
        return user;
      });
    });
  }

  selectUser(name: string) {
    this.router.navigate(['detail-user', name]);
  }

}
