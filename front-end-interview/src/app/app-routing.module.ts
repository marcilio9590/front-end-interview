import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AppComponent } from './components/app/app.component';
import { FormComponent } from './components/form/form.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: FormComponent },
      { path: ':user', component: UserComponent, },
      { path: '', component: RepositoriosComponent, }
    ]
  },
  {
    path: ':user', component: UserComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
