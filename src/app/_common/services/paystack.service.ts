import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderFormData } from 'src/app/order-now/order-now.component';

const headers = new HttpHeaders({
  Authorization: `Bearer sk_live_2288514c9d501669926c10dc09cff03b11b3bafa`
});


@Injectable()
export class PaystackService {
  private paystackApiUrl = 'https://api.paystack.co';
  //private apiURL = 'https://asynctrainingapi5-70vtakyj.b4a.run';
  //private clientURL = 'https://training.async.ng/';
  private apiURL = 'http://localhost:3000';
  private clientURL = 'http://localhost:4200';

  constructor(private http: HttpClient) { }
  

  initiatePayment(orderFormData: OrderFormData): Observable<any> {   

    const body = {
      email: `${orderFormData.phoneNumber}@bonnyride.com`,
      //phoneNumber: orderFormData.phoneNumber,
      amount: orderFormData.cost * 100, // Paystack API uses amount in kobo (1 NGN = 100 kobo)
      currency: 'NGN',
      names: orderFormData.names,
      selectedPoints: orderFormData.selectedPoints,
      selectedCarCategory: orderFormData.selectedCarCategory,
      selectedTime: orderFormData.selectedTime
      //callback_url: `${this.clientURL}/portal/payment?courseId=${courseId}&userId=${userId}`,
    };

    console.log('body== ',body)

    return this.http.post(`${this.paystackApiUrl}/transaction/initialize`, body, { headers });
  }


}