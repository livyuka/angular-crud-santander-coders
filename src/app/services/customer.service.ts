import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = []

  constructor() {

    let customer: Customer = {
      id: 1,
      name: "Livia",
      email: "livia@email.com",
      dateOfBirth: new Date("1998-05-14")
    }
    let customer2: Customer = {
      id: 2,
      name: "Yuraki",
      email: "livia@email.com",
      dateOfBirth: new Date("1998-05-14")
    }

    this.customers.push(customer);
    this.customers.push(customer2);


  }

  getList(): Customer[] {
    return this.customers;
  }

  getById(){

  }

  add(customer: Customer) {
    this.customers.push(customer);

  }

  update(customer: Customer) {
    this.customers

  }

  delete(id: number) {
    this.customers = this.customers.filter(customer => customer.id !== id);
  }

  create(){

  }

}
