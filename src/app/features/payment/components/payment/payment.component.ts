import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  public paymentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.paymentForm = this.fb.group({
      Name: [null, [Validators.required]],
      Email: [null, [Validators.required]],
      Mobile: [null, [Validators.required]],
      Ammount: [null, [Validators.required]],
    });

  }

  public onSubmit() {
    if (this.paymentForm.valid) {
      this.createRzpayOrder();
    }
  }

  createRzpayOrder() {
    // call api to create order_id
    this.payWithRazor();
  }

  payWithRazor() {
    const options: any = {
      key: environment.razorPay.keyId,
      amount: parseInt(this.paymentForm.value.Ammount) * 100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: this.paymentForm.value.Name, // company name or product name
      email: this.paymentForm.value.Name,
      description: '', // product description
      image: '../../../../../assets/photos/angular.png', // company logo or product image
      modal: {
        escape: false,
      },
      notes: {},
      theme: {
        color: '#0c238a',
      },
      callback_url: 'https://localhost:44347/api/Start/TakePayment/',
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: this.paymentForm.value.Name, //your customer's name
        email: this.paymentForm.value.Email,
        contact: this.paymentForm.value.Mobile, //Provide the customer's phone number for better conversion rates
      },
    };

    options.handler = (response: any, error: any) => {
      options.response = response;
      console.log(response);
      // call your backend api to verify payment signature & capture transaction
    };

    options.modal.ondismiss = () => {
      console.log('Cancelled');
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
