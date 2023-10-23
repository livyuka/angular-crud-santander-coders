import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit{

  id: number = -1
  isNewCustomer:boolean = true;
  customer: Customer = {
    id: -1,
    name: "",
    dateOfBirth: new Date(),
    email: ""
  }

  constructor (
    private route: ActivatedRoute,
    private router: Router
    ){

  }
  ngOnInit(){
    const getId = this.route.snapshot.paramMap.get('id');

    if (getId)
      this.id = parseInt(getId)
  }

  goToCustomerList(){
    this.router.navigate(['customer-list'])
  }

  saveCustomer(){

  }
}
