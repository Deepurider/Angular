import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private url = 'https://api.razorpay.com/v1/payments/';
  constructor(private http: HttpClient) {}

  public getPaymentById(id: string) {
    let header = new HttpHeaders({
      Authorization:
        `Basic ` +
        `'${environment.razorPay.keyId}':'${environment.razorPay.keySecret}'`,
    });
    console.log(header)
    return this.http.get(this.url + id, {
      headers: header,
    });
  }
}
