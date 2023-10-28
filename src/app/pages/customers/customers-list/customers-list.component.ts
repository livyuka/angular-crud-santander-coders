import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = []
  customerIdSelectedToDelete: number = -1

  constructor(
    private customerService: CustomerService,
    private router: Router
    ){
  }

  ngOnInit(): void {
    this.customers = this.customerService.getList();
  }

  goToCustomerEdit(id:number){
    this.router.navigate(['customer-edit',id]);
  }

  deleteCustomer(){
    this.customerService.delete(this.customerIdSelectedToDelete);
    this.ngOnInit();
  }

  openModalToConfirmDelete(id:number){
    this.customerIdSelectedToDelete = id;
  }
}
