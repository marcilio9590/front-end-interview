import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './components/app/app.component';
import { FormComponent } from './components/form/form.component';
import { UserComponent } from './components/user/user.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    RepositoriosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
