import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {
  users: any = []
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getAllUser().subscribe((res) => {
      console.log(res)
      this.users = res;
    })
  }


}
