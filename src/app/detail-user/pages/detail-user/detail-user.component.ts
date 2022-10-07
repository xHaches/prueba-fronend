import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailUserModel } from 'src/app/models/detailUser';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnDestroy {

  user!: any;
  userSubscription!: Subscription;

  constructor(
    private detailUserService: DetailUserModel,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const nameParam = this.route.snapshot.params['name'];
    this.userSubscription = this.detailUserService.getUserByName(nameParam).subscribe((usr: any) => {
      this.user = usr;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
