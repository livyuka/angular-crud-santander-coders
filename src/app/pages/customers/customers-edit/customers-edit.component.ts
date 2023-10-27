import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit{

  id: number = -1
  customerForm: FormGroup

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private toastr: ToastrService
    ){
      this.customerForm = new FormGroup({
        name: new FormControl("",[Validators.required,Validators.minLength(3)]),
        dateOfBirth: new FormControl("",[Validators.required]),
        email: new FormControl("",[Validators.required, Validators.email])
      })
  }

  ngOnInit(){
    const getId = this.route.snapshot.paramMap.get('id');

    if (getId){
      this.id = parseInt(getId);
      const currentCustomer= this.customerService.getById(this.id);

      this.customerForm = new FormGroup({
        name: new FormControl(currentCustomer?.name,[Validators.required, Validators.minLength(3)]),
        dateOfBirth: new FormControl(currentCustomer?.dateOfBirth,[Validators.required]),
        email: new FormControl(currentCustomer?.email,[Validators.required, Validators.email])
      })
    }
  }

  goToCustomerList(){
    this.router.navigate(['customer-list'])
  }

  onSubmit(customer:Customer){
    if(this.id === -1)
      this.customerService.create(customer)
    else{
      customer.id = this.id;
      this.customerService.update(customer)
    }

    this.router.navigate(['customer-list'])
  }

  showSuccess() {
    this.toastr.success('Cliente salvo com sucesso!');
  }
}
