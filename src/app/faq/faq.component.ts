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
 * @title Page not found component
 */
@Component({
    selector: 'async-faqs',
    standalone: true,
    imports: [MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
    styles: [`

.head {
    background: #00838F;
    article {
      color: white;
      padding: 2em 1em 2em 8em;
      h2 {
        font-family: Garamond, serif;
        font-size: 2em;
      }
      h3 {
        font-family: Georgia, serif;
        font-size: 1em;
      }
      p {
        text-align: justify;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5em;
      }
      a {
        color: white;
        text-decoration: underline;
        font-weight: bold;
      }
    }
  }


  .body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    .writeup {
      width: 70%;
      padding: 2em 1em 2em 8em;
      h3 {
        color: #ffab40;
      }
      p {
        text-align: justify;
        /* font-family: 'Courier New', monospace; */
        font-size: 14px;
        line-height: 1.5em;
      }
      .form{
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        mat-form-field {
          flex: 1;
         }
      }
      mat-form-field {
        width: 100%;
      }
      button {
        width: 15%;
      }
    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.head {
    article {
      width: 100%;
      padding: 1em;
      h2 {
        font-size: 1.4em;
      }
      h3 {
        font-size: 1em;
      }
      p {
        width: 90%;
      }
    }
}

.body {
  .writeup {
    h3 {
        padding-left: 1em;
    }
    width: 100%;
    padding: 1em;
    .form {
      display: flex;
      flex-direction: column;
    }
    button {
      width: 100%;
    }
  }
}
}

`],
    template: `

<section class="head">
  <article>
      <h2>Frequently Asked Questions (FAQs)</h2>
      <!-- <h3>{{course.subTitle}}</h3> -->
      <p>Check below for answers to common questions you may want to ask</p>
    </article>
</section>


<section class="body">
    <article class="writeup">
      <h3>FAQs</h3>

      <div class="form">
        <mat-form-field appearance="outline">
          <mat-label>Search for question</mat-label>
          <input matInput>
          <!-- <mat-hint>Name is optional for anonymity</mat-hint> -->
        </mat-form-field>
      </div>
      
      
      <mat-accordion>

        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> How do I book a cab? </mat-panel-title>
            <!-- <mat-panel-description>This is a summary of the content</mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your experience with our drivers</p> -->

          <ul>
            <li>
                To book a cab, open the app and enter your destination. 
                Choose your preferred cab type, confirm the ride details, and tap on "Book Now." 
                The nearest available driver will be assigned to your ride.
            </li>
          </ul>
        </mat-expansion-panel>



        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> Can I schedule a ride in advance? </mat-panel-title>
            <!-- <mat-panel-description>This is a summary of the content</mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your experience with our cars</p> -->

          <ul>
            <li>
                Yes, you can schedule a ride in advance by selecting the "Schedule Ride" option during the booking process. 
                Choose the date and time for your ride, and the system will automatically assign a driver.
            </li>
          </ul> 
        </mat-expansion-panel>



        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title>  How do I track my booked ride? </mat-panel-title>
            <!-- <mat-panel-description>This is a summary of the content</mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your experience with our booking or payment processes</p> -->
          
          <ul>
            <li>
                Once your ride is confirmed, you can track the assigned cab in real-time on the map within the app. 
                The driver's location, estimated time of arrival, and other details will be visible.
            </li>
          </ul>

        </mat-expansion-panel>



        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> What payment methods are accepted? </mat-panel-title>
            <!-- <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your general experience or any other thought</p> -->

          <ul>
            <li>
                We accept various payment methods, including credit/debit cards, mobile wallets, and other electronic payment options. 
                You can manage your payment methods in the app settings.
            </li>
          </ul>

        </mat-expansion-panel>


        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> How can I cancel a booked ride? </mat-panel-title>
            <!-- <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your general experience or any other thought</p> -->

          <ul>
            <li>
            To cancel a ride, go to the 'My Rides' section, select the booked ride, and tap on the "Cancel Ride" button. 
            Please note that there may be a cancellation fee, depending on the timing.
            </li>
          </ul>

        </mat-expansion-panel>


        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> What if I left something in the cab? </mat-panel-title>
            <!-- <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your general experience or any other thought</p> -->

          <ul>
            <li>
            If you've left something in the cab, you can contact our support team with details about your ride. 
            We will do our best to assist in locating and returning your belongings.
            </li>
          </ul>

        </mat-expansion-panel>


        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> How can I update my account information? </mat-panel-title>
            <!-- <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your general experience or any other thought</p> -->

          <ul>
            <li>
            To update your account information, go to the app settings and select the "Account" section. 
            Here, you can edit your profile details, contact information, and password.
            </li>
          </ul>

        </mat-expansion-panel>


        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> Is it possible to book a cab for someone else? </mat-panel-title>
            <!-- <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your general experience or any other thought</p> -->

          <ul>
            <li>
            Yes, you can book a ride for someone else. 
            During the booking process, enter the passenger's details, and make sure to provide their contact information for communication purposes
            </li>
          </ul>

        </mat-expansion-panel>


        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> Are there any additional charges during peak hours? </mat-panel-title>
            <!-- <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your general experience or any other thought</p> -->

          <ul>
            <li>
            Depending on the demand, there may be peak-hour or surge pricing. 
            This is communicated to you before confirming the booking. 
            We recommend checking the fare estimate before booking during peak times.
            </li>
          </ul>

        </mat-expansion-panel>


        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> How do I dispute a charge? </mat-panel-title>
            <!-- <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
          </mat-expansion-panel-header>
          <!-- <p>Tell us your general experience or any other thought</p> -->

          <ul>
            <li>
            If you believe there is an error in your fare or you want to dispute a charge, please contact our customer support team with the ride details, and we'll investigate the issue promptly
            </li>
          </ul>

        </mat-expansion-panel>


        <!-- <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> Overall Satisfaction </mat-panel-title>
          </mat-expansion-panel-header>

          <ul>
            <li></li>
          </ul>

        </mat-expansion-panel> -->

      </mat-accordion>

    </article>

   </section>



`,
})
export class faqsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}
 }