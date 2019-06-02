import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private gitHubService: GithubService) { }

  public titleInputOne: String;
  public gitUser = new FormControl('');
  public user: User;
  public showUser: Boolean = false;
  public repos: Observable<any>;

  ngOnInit() {
    this.titleInputOne = 'Usuário GitHub';
  }

  searchRepos() {
    this.searchUser();
    this.repos = this.gitHubService.getReposUser(this.gitUser.value);
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
