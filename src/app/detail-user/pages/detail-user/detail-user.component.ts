import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailUserModel } from 'src/app/models/detailUser';
import { UserFromApi } from 'src/app/shared/interfaces/user-from-api';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  user!: any;

  constructor(
    private detailUserService: DetailUserModel,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let userParam;
    console.log(this.route.snapshot.params)
    
      this.detailUserService.getUserByName(this.route.snapshot.params['name']).subscribe((usr: any) => {
        this.user = usr;
        console.log(this.user);
      });
  }

}
