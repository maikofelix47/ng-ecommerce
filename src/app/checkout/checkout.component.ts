import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface CheckoutSummary{
  cartDetails: any;
  paymentMode:any;
  address: any;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  public paymentMode: string = '';
  public checkoutSummary!: CheckoutSummary;

  paymentModeFormGroup = this.formBuilder.group({
    paymentMode: ['', Validators.required],
    mobileNo: ['']
  });
  addressFormGroup = this.formBuilder.group({
    county: ['', Validators.required],
    town: ['', Validators.required],
    estate: ['', Validators.required],
    houseAddress: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder){

  }
  public ngOnInit(): void {
    
  }
  public generateCheckoutSummary(){
    this.checkoutSummary = {
       cartDetails: {},
       paymentMode: this.paymentModeFormGroup.getRawValue(),
       address: this.addressFormGroup.getRawValue()
    };
  }
}
