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
    this.customers.push(customer);

    let customer2: Customer = {
      id: 2,
      name: "Yuraki",
      email: "livia@email.com",
      dateOfBirth: new Date("1998-05-14")
    }
    this.customers.push(customer2);
  }

  getList(): Customer[] {
    return this.customers;
  }

  getById(id:number){
   return this.customers.find(customer => customer.id === id)
  }

  update(customer: Customer) {
    let searchCustomer = this.getById(customer.id);

    if (searchCustomer){
      searchCustomer.name = customer.name;
      searchCustomer.dateOfBirth = customer.dateOfBirth;
      searchCustomer.email = customer.email;
    }
  }

  delete(id: number) {
    this.customers = this.customers.filter(customer => customer.id !== id);
  }

  create(customer:Customer){
    const maxId:number = this.getMaxId();

    if (maxId)
      customer.id = maxId + 1
    else
      customer.id = 1

    this.customers.push(customer)
  }

  getMaxId():number{
    return this.customers.reduce((maxId, customer) => {
      return customer.id > maxId ? customer.id : maxId;
    }, 0);
  }
}
