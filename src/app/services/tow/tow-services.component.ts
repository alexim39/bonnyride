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
import { RouterModule } from '@angular/router';

/**
 * @title contact page
 */
@Component({
  selector: 'async-tow-services',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  template: `

<div class="main-container">
    <div class="content">

      <div class="left-content">
        <div class="bold-text">Bonnyride Towing Service: We Support You Get Back on the Road Quickly on Bonny Island</div>

        <div class="more-btn">
            <a mat-raised-button color="accent" routerLink="../tow-booking" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Book Towing Vehicle Now <i class="fa fa-angle-double-right"></i></a>
        </div>

      </div>

      <div class="right-panel">
        <img src="assets/img/towtruck.png">
      </div>
      
    </div>
  </div>

  <section class="head">
    <article>
      <!-- <h2>Bonnyride Towing Service: We Support You Get Back on the Road Quickly on Bonny Island</h2> -->
      <h3>We'll Be There When You Need Us Most</h3>
      <p>Don't let a car breakdown ruin your day! Bonnyride Towing Service is here to get you back on the road quickly and efficiently, 24/7.</p>

      <p>We understand that car trouble can be stressful, especially on an island.  
        Our friendly and professional dispatchers are available around the clock to take your call and send help right away.  
        No matter where you are on Bonny Island, we'll get to you fast.</p>
    </article>
  </section>


  <section class="body">
    <article class="writeup">
      <h3>These Are The Things We Can Help You With</h3>

      <div class="contact-wrapper">

        <div class="contact-details">
          
        
          <p>These are the reasons why you should give us a call, and we ensure to respond within minutes. We will be happy to support you any time.</p>

          <div class="address-wrapper">
            <div class="fa-icon">
              <div class="fa fa-clock-o" aria-hidden="true"></div>
            </div>
            <div class="address-text">
              <h6>24/7 Towing</h6>
              <p>We're available any time of day or night to assist you with towing needs</p>
            </div>
          </div>

          <div class="address-wrapper">
            <div class="fa-icon">
              <div class="fa fa-car" aria-hidden="true"></div>
            </div>
            <div class="address-text">
              <h6>Flat Tire Assistance</h6>
              <p>If you have a flat tire and can't change it yourself, we can help</p>
            </div>
          </div>

          <div class="address-wrapper">
            <div class="fa-icon">
              <div class="fa fa-ambulance" aria-hidden="true"></div>
            </div>
            <div class="address-text">
              <h6>Accident Towing</h6>
              <p>In the event of an accident, we'll safely tow your vehicle and can help you connect with the necessary services</p>
            </div>
          </div>

          <div class="address-wrapper">
            <div class="fa-icon">
              <div class="fa fa-road" aria-hidden="true"></div>
            </div>
            <div class="address-text">
              <h6>Off-Road Recovery</h6>
              <p>Did you get stuck on the beach or a rough road? We have the equipment to get your vehicle back on solid ground</p>
            </div>
          </div>

          <div class="address-wrapper">
            <div class="fa-icon">
              <div class="fa fa-taxi" aria-hidden="true"></div>
            </div>
            <div class="address-text">
              <h6>Winch-Out Services</h6>
              <p>Need help getting your car out of a ditch or tight spot? We can winch it out safely</p>
            </div>
          </div>

          <div class="address-wrapper">
            <div class="fa-icon">
              <div class="fa fa-globe" aria-hidden="true"></div>
            </div>
            <div class="address-text">
              <h6>Junk Car Removal</h6>
              <p>Looking to get rid of an old, unwanted vehicle? We can tow it away and dispose of it responsibly</p>
            </div>
          </div>

         <!--  <div class="address-wrapper">
            <div class="fa-icon">
              <div class="fa fa-send" aria-hidden="true"></div>
            </div>
            <div class="address-text">
              <h6>Emaill Addresses</h6>
              <p>async.contacts&#64;gmail.com, <br>support&#64;async.ng, <br>contacts&#64;async.ng</p>
            </div>
          </div>

          <div class="address-wrapper">
            <div class="fa-icon">
              <div class="fa fa-phone" aria-hidden="true"></div>
            </div>
            <div class="address-text">
              <h6>Phone Numbers</h6>
              <p>
                <a href="tel:09131301019">09131301019</a>,<br>
                <a href="tel:09062537816">09062537816</a>
              </p>
            </div>
          </div> -->

        </div>

        <div class="contact-form">
          <div class="form-wrapper">

              <div class="wrapper-left">
                <h4>Committed to Your Safety</h4>
                <p>Our experienced and licensed tow truck operators prioritize safety at all times.  
                  We use the latest equipment and techniques to ensure your vehicle is towed securely and without damage.</p>
              </div>

              <div class="wrapper-right">
                <h4>Transparent Pricing</h4>
                <p>We understand the importance of affordability during a stressful time. 
                  <strong>That's why we offer upfront pricing before we dispatch a tow truck.</strong>  There are no hidden fees, so you know exactly what to expect.</p>
              </div>

          </div>

          <div class="form-btn">
            <a mat-flat-button color="accent" href="tel:09131301019">Get Help Now On 091 3130 1019</a>
          </div>
        </div>

      </div>
      

    </article>

   </section>
  `,
  styleUrls: ['tow-services.component.scss', 'tow-services.mobile.scss']
})
export class TowServicesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

   // scroll to top when clicked
   scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}