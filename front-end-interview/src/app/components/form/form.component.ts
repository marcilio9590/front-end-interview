import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent implements OnInit {

  title = 'Front End Interview';
  subtitle = 'Compasso';

  constructor(private gitHubService: GithubService) { }

  public titleInputOne: String;
  public gitUser = new FormControl('');
  public user: User;
  public showUser: Boolean = false;
  public show_repos: Boolean = false;
  public repos: [];

  ngOnInit() {
    this.titleInputOne = 'Usuário GitHub';
  }

  searchRepos() {
    this.searchUser();
    this.gitHubService.getReposUser(this.gitUser.value).subscribe(
      res => {
        this.repos = res;
        this.show_repos = true;
      }
    );
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
    this.searchUser();
    this.gitHubService.getStarredUser(this.gitUser.value).subscribe(
      res => {
        this.repos = res;
        this.show_repos = true;
      }
    );
  }

}
