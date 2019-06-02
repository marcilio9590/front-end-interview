import { Component, ViewChild } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Front End Interview';
  subtitle = 'Compasso';

  @ViewChild(FormComponent) form;

  constructor() { }

}
