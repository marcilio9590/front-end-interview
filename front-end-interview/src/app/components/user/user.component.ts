import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() showUser: Boolean;

  constructor() { }
  ngOnInit() {
  }

}
