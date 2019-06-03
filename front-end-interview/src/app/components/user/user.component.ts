import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() showUser: Boolean;
  @Input() class: String;

  constructor(private activatedRoute: ActivatedRoute, private gitHubService: GithubService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('user')) {
        this.searchUser(params.get('user'));
        this.class = 'user-card mx-auto';
      }
    });
  }

  searchUser(user: String) {
    this.gitHubService.getUserData(user).subscribe(
      res => {
        this.user = res;
        this.showUser = true;
      }
    );
  }

}
