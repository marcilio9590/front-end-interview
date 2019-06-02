import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
