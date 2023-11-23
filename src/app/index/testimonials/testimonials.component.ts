import {Component, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'async-index-testimonials',
  standalone: true,
  styleUrls: ['testimonials.component.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  template: `
    <article class="testimonial">
      <h1>Testimonials</h1>

      <section>
        <figure class="snip1139">
          <blockquote class="quote">
          “As a frequent traveler to Bonny Island, I’ve tried various cab services, but none have matched the convenience and reliability of BonnyRide. 
          From the moment I book my ride on their user-friendly app, to the instant I’m dropped off at my destination, the experience is seamless. 
          The drivers are professional, the cabs are clean and well-maintained, and they always arrive on time. 
          What sets BonnyRide apart is their commitment to customer satisfaction. 
          They go above and beyond to ensure that my journey is comfortable and hassle-free. 
          I highly recommend BonnyRide to anyone looking for a dependable and efficient cab service in Bonny Island.”
            <div class="arrow"></div>
          </blockquote>
          <!-- <img src="assets/img/t1.jpg" alt="testimonial"/> -->
          <div class="author">
            <h5>Brown Eunice <span>- BonnyRide customer</span></h5>
          </div>
        </figure>

        <figure class="snip1139 hover">
          <blockquote class="quote">
          “BonnyRide has truly transformed my travel experience in Bonny Island. Their service is exceptional - the drivers are courteous, the vehicles are always spotless, and they have never failed to arrive on time. 
          The booking process through their app is incredibly straightforward and efficient. But what impresses me the most is their dedication to providing a comfortable and safe journey for their passengers. 
          I can’t imagine using any other cab service in Bonny Island. BonnyRide is simply the best!”
            <div class="arrow"></div>
          </blockquote>
          <!-- <img src="assets/img/t3.jpg" alt="testimonial"/> -->
          <div class="author">
            <h5>Aliu Ibrahim<span>- BonnyRide customer</span></h5>
          </div>
        </figure>

        <figure class="snip1139">
          <blockquote class="quote">
          “I’ve been using BonnyRide for my travels around Bonny Island for a while now, and I must say, their service is unparalleled. 
          The ease of booking a ride through their app, the promptness of the drivers, and the comfort of the journey are truly commendable. 
          The drivers are not just punctual but also very friendly and professional. 
          The cabs are always clean and well-maintained, which makes for a pleasant ride every time. 
          BonnyRide has made commuting in Bonny Island a breeze and I wouldn’t choose any other cab service. Highly recommended!”
            <div class="arrow"></div>
          </blockquote>
          <!-- <img src="assets/img/t2.jpg" alt="testimonial"/> -->
          <div class="author">
            <h5>Chinasa Favour<span>- BonnyRide customer</span></h5>
          </div>
        </figure>
      </section>


    </article>
  `,

})
export class TestimonialsComponent implements OnInit, OnDestroy{
  // init subscriptions list
  subscriptions: Subscription[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
   
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
