import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.sass']
})
export class RepositoriosComponent implements OnInit {

  @Input() repos: Observable<any>;
  @Input() show_repos: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
