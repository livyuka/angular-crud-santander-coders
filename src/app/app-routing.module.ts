import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './pages/customers/customers-list/customers-list.component';
import { CustomersEditComponent } from './pages/customers/customers-edit/customers-edit.component';
import { LoginComponent } from './pages/customers/login/login.component';

const routes: Routes = [
  {path: "customer-list", component: CustomersListComponent},
  {path: "customer-edit/:id", component: CustomersEditComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: LoginComponent}
  // {path: "", component: CustomersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
