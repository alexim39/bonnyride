import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';


/**
 * @title contact page
 */
@Component({
  selector: 'async-cab-services',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, RouterModule],
  template: `
  <div class="main-container">
    <div class="content">

      <div class="left-content">
        <div class="bold-text">Experience Unmatched Comfort with Bonnyride Cab</div>
        <div class="normal-text">
          As a valued Bonnyride customer, enjoy the convenience of managing bookings and more through our user-friendly dashboard. Ensure a comfortable journey every time
        </div>
      </div>

      <div class="right-panel">
        <img src="assets/img/cab.png">
      </div>
      
    </div>
  </div>

<div class="benefit">
  
  <div>
    <h2>Cab Services: Your Ride on Bonny Island</h2>
    <p>
    Bonnyride Cab is your one-stop shop for reliable and convenient transportation on the beautiful Bonny Island.  
    Whether you're a resident or a visitor, we're here to get you where you need to go safely and comfortably within the Island.
    </p>
  </div>



  <div>
    <h2>Book Your Ride in Minutes</h2>
    <p>
    Our user-friendly website and mobile app allow you to book a cab quickly and easily. 
    Simply enter your pick-up and drop-off locations, choose your preferred vehicle type (if available), and schedule your ride.  
    You'll receive real-time updates on your driver's location and estimated arrival time.
    </p>
  </div>



  <div>
    <h2>Safe and Reliable Service</h2>
    <p>
    We prioritize your safety. All our drivers are licensed, insured, and undergo thorough background checks. 
    Our vehicles are well-maintained and inspected regularly.
    </p>
  </div>


  <div class="choose">
    <h2>Choose the Perfect Ride</h2>
    <p>
      Depending on your needs and the occasion, we offer a variety of vehicle options (subject to availability).
    </p>
  </div>


  <div class="rates">
    <h2>Competitive Rates</h2>
    <p>
    We offer competitive fares to ensure your ride is affordable and convenient.  
    Fares are clearly displayed upfront before you book, so there are no surprises.
    </p>
  </div>

</div>


<section class="experience">
    
    <h2>Experience the Bonnyride Difference</h2>
    <p>
    Book your ride with Bonny Cabs today and experience the difference for yourself.  We're committed to providing you with a stress-free and enjoyable transportation experience on Bonny Island.
    </p>

</section>


<div class="download-container">
  <div class="download-img"></div>
  <div class="download-text">
    <h2>Download the App Now!</h2>
    <p> For an even faster booking experience, download our mobile app (available on iOS and Android).  Manage your bookings, track your driver, and pay for your ride – all from the palm of your hand!</p>
    <button mat-raised-button color="primary">Download Now</button>
  </div>
</div>



  `,
  styleUrls: ['cab-services.component.scss', 'cab-services.mobile.scss']
})
export class CabServicesComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {}
}