import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';

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
