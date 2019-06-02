import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.sass']
})
export class FormComponentComponent implements OnInit {

  constructor(private gitHubService: GithubService) { }

  public titleInputOne: String;
  public gitUser = new FormControl('');
  public user: User;
  public showUser: Boolean = false;

  ngOnInit() {
    this.titleInputOne = 'Usuário GitHub';
  }

  searchRepos() {

  }

  searchUser() {
    this.gitHubService.getUserData(this.gitUser.value).subscribe(
      res => {
        this.user = res;
        this.showUser = true;
      }
    );
  }

  searchStarred() {

  }

}
