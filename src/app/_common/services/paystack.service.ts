import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderNowFormData  } from 'src/app/order-now/order-now.component';

const headers = new HttpHeaders({
  Authorization: `Bearer sk_live_2288514c9d501669926c10dc09cff03b11b3bafa`
  //Authorization: `Bearer sk_test_2b176cfecf4bf2bf8ed1de53b55f868dc4ed9127`
});


@Injectable()
export class PaystackService {
  private paystackApiUrl = 'https://api.paystack.co';
  //private apiURL = 'https://asynctrainingapi5-70vtakyj.b4a.run';
  //private clientURL = 'https://bonnyride.com/#/';
  private apiURL = 'http://localhost:3000';
  private clientURL = 'http://localhost:4200';

  constructor(private http: HttpClient) { }
  

  initiatePayment(orderFormData: OrderNowFormData): Observable<any> {  
    
    console.log('submit ',orderFormData)

    const body = {
      email: `${orderFormData.phoneNumber}@bonnyride.com`,
      amount: orderFormData.cost * 100, // Paystack API uses amount in kobo (1 NGN = 100 kobo)
      currency: 'NGN',
      //callback_url: `${this.clientURL}/portal/payment?courseId=${courseId}&userId=${userId}`,
      callback_url: `${this.clientURL}/#/payment-success`,
      metadata: {
        custom_fields: [
          {
            display_name: orderFormData.names,
            phone_number: orderFormData.phoneNumber,
            selected_points: orderFormData.selectedPoints,
            selected_car_category: orderFormData.selectedCarCategory,
            selected_time: orderFormData.selectedTime,
            selected_date: orderFormData.selectedDate
          }
        ]
      }
    };

    return this.http.post(`${this.paystackApiUrl}/transaction/initialize`, body, { headers });
  }


}