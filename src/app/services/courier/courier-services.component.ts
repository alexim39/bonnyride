import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

/**
 * @title contact page
 */
@Component({
  selector: 'async-courier-services',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  template: `
 
 <div class="main-container">
    <div class="content">

    <div class="right-panel">
        <img src="assets/img/courier.jpg">
    </div>

      <div class="left-content">
        <div class="bold-text">Experience Fast, Reliable Delivery Across Bonny Island</div>
        <div class="normal-text">
          We offer a convenient and reliable courier service to get your important packages and documents delivered securely across Bonny Island.
        </div>
      </div>

      
      
    </div>
  </div>


  <div class="step-container">
    <div class="step-content">
      <h1>Why Choose Bonnyride Courier Service?</h1>
      <ol>

        <li>
          <h2>Speed and Efficiency</h2>
          <p> Our extensive network of drivers ensures prompt pick-up and fast delivery, getting your items where they need to be quickly</p>
        </li>

        <li>
          <h2>Convenience</h2>
          <p>Schedule your pick-up and delivery online or through our mobile app in just a few clicks. No need to wait in line or deal with traffic</p>
        </li>

        <li>
          <h2>Reliability</h2>
          <p>We understand your packages are important. Our bonded and insured drivers take pride in careful handling and secure delivery</p>
        </li>

        <li>
          <h2>Competitive Rates</h2>
          <p> We offer affordable rates for all your delivery needs. Get a quote upfront before you book, so there are no hidden fees</p>
        </li>

        <li>
          <h2>Peace of Mind</h2>
          <p>Track your package in real-time through our online tracking system or mobile app. You'll always know where your item is and when it will arrive</p>
        </li>

      </ol>

      <!-- <a mat-raised-button color="accent">Sign up now</a> -->
    </div>
  </div>


  <aside class="why-we-exist">
    <h2>What We Can Deliver?</h2>
    <div>
      <span>Documents and letters</span>
      <span>Small packages and parcels</span>
      <span>Urgent medical supplies</span>
      <span>Gifts and flowers</span>
      <span>and more!</span>
      <!-- <span> Bet Investment</span> -->
    </div>


    <h1>We can handle a variety of items both large and small</h1>


    <a mat-flat-button color="accent" href="tel:09130311019">CALL US NOW ON <span>091 3031 1019</span></a>
  </aside>

 
  `,
  styleUrls: ['courier-services.component.scss', 'courier-services.mobile.scss']
})
export class CourierServicesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}