import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailUserRoutingModule } from './detail-user-routing.module';
import { DetailUserComponent } from './pages/detail-user/detail-user.component';
import { MaterialModule } from '../shared/modules/material/material.module';


@NgModule({
  declarations: [
    DetailUserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DetailUserRoutingModule
  ]
})
export class DetailUserModule { }
