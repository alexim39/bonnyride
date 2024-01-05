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
 * @title Customer feedback
 */
@Component({
  selector: 'async-feedback',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  template: `
  <section class="head">

  <article>
      <h2>Share your feedback</h2>
      <!-- <h3>{{course.subTitle}}</h3> -->
      <p>Use below forms to give us your thought and feedback about driver behaviour, vehicle cleanliness, and your overall experience with BonnyRide</p>
    </article>

  </section>


  <section class="body">
    <article class="writeup">
      <h3>Customer Feedback</h3>

      <div class="form">

        <mat-form-field appearance="outline">
          <mat-label>Name</mat-label>
          <input matInput>
          <mat-hint>Name is optional for anonymity</mat-hint>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Phone Number</mat-label>
          <input matInput type="tel">
          <mat-hint>Phone number is optional for anonymity</mat-hint>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Choose a date</mat-label>
          <input matInput [matDatepicker]="picker">
          <mat-hint>MM/DD/YYYY</mat-hint>
          <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Enter a time</mat-label>
          <input matInput type="time">
          <mat-hint>HH:MM AM/PM</mat-hint>
        </mat-form-field>

      </div>
      
      
      <mat-accordion>

        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> Drivers Behaviour </mat-panel-title>
            <!-- <mat-panel-description>This is a summary of the content</mat-panel-description> -->
          </mat-expansion-panel-header>
          <p>Tell us your experience with our drivers</p>

            <mat-form-field>
              <mat-label>How would you rate the politeness and professionalism of your driver? </mat-label>
              <mat-select >
                <mat-option value="Excellent">Excellent</mat-option>
                <mat-option value="Good">Good</mat-option>
                <mat-option value="Average">Average</mat-option>
                <mat-option value="Poor">Poor</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Did the driver follow the optimal route to your destination? </mat-label>
              <mat-select >
                <mat-option value="Yes">Yes</mat-option>
                <mat-option value="No">No</mat-option>
                <mat-option value="cant say">Can't say</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Were there any issues with the driver's behavior or attitude?</mat-label>
              <mat-select >
                <mat-option value="Yes">Yes</mat-option>
                <mat-option value="No">No</mat-option>
                <mat-option value="cant say">Can't say</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Do you have any suggestions for improving the behavior of our drivers?</mat-label>
              <textarea matInput></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary">Submit</button>

        </mat-expansion-panel>












        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> Vehicle Condition</mat-panel-title>
            <!-- <mat-panel-description>This is a summary of the content</mat-panel-description> -->
          </mat-expansion-panel-header>
          <p>Tell us your experience with our cars</p>

            <mat-form-field>
              <mat-label>How would you rate the condition of the vehicle? </mat-label>
              <mat-select >
                <mat-option value="Excellent">Excellent</mat-option>
                <mat-option value="Good">Good</mat-option>
                <mat-option value="Average">Average</mat-option>
                <mat-option value="Poor">Poor</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Were there any noticeable issues with the vehicle interior or exterior? </mat-label>
              <mat-select >
                <mat-option value="Yes">Yes</mat-option>
                <mat-option value="No">No</mat-option>
                <mat-option value="cant say">Can't say</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Did the vehicle meet your expectations in terms of cleanliness and functionality? </mat-label>
              <mat-select >
                <mat-option value="Yes">Yes</mat-option>
                <mat-option value="No">No</mat-option>
                <mat-option value="cant say">Can't say</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Do you have any suggestions for improving the cleanliness or functionality of our vehicles?</mat-label>
              <textarea matInput></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary">Submit</button>

        </mat-expansion-panel>








        <mat-expansion-panel class="accordion">
          <mat-expansion-panel-header>
            <mat-panel-title> Booking Process </mat-panel-title>
            <!-- <mat-panel-description>This is a summary of the content</mat-panel-description> -->
          </mat-expansion-panel-header>
          <p>Tell us your experience with our booking or payment processes</p>

            <mat-form-field>
              <mat-label>How would you rate the ease and convenience of the booking process?  </mat-label>
              <mat-select >
                <mat-option value="Excellent">Excellent</mat-option>
                <mat-option value="Good">Good</mat-option>
                <mat-option value="Average">Average</mat-option>
                <mat-option value="Poor">Poor</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Were there any issues with the booking or payment process? </mat-label>
              <mat-select >
                <mat-option value="Yes">Yes</mat-option>
                <mat-option value="No">No</mat-option>
                <mat-option value="cant say">Can't say</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Do you have any suggestions for improving our booking or payment process?</mat-label>
              <textarea matInput></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary">Submit</button>

        </mat-expansion-panel>












        <mat-expansion-panel class="accordion" (opened)="panelOpenState = true" (closed)="panelOpenState = false">
          <mat-expansion-panel-header>
            <mat-panel-title> Overall Satisfaction </mat-panel-title>
            <!-- <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
          </mat-expansion-panel-header>
          <p>Tell us your general experience or any other thought</p>

          <mat-form-field>
              <mat-label>How satisfied are you with your overall experience using our cab service? </mat-label>
              <mat-select >
                <mat-option value="Excellent">Excellent</mat-option>
                <mat-option value="Good">Good</mat-option>
                <mat-option value="Average">Average</mat-option>
                <mat-option value="Poor">Poor</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Would you recommend our cab service to others? </mat-label>
              <mat-select >
                <mat-option value="Yes">Yes</mat-option>
                <mat-option value="No">No</mat-option>
                <mat-option value="cant say">Can't say</mat-option>
              </mat-select>
            </mat-form-field>

            <!-- <mat-form-field>
              <mat-label>Did the vehicle meet your expectations in terms of cleanliness and functionality? </mat-label>
              <mat-select >
                <mat-option value="Yes">Yes</mat-option>
                <mat-option value="No">No</mat-option>
                <mat-option value="cant say">Can't say</mat-option>
              </mat-select>
            </mat-form-field> -->

            <mat-form-field>
              <mat-label>What aspects of the service contributed most to your satisfaction or dissatisfaction?</mat-label>
              <textarea matInput></textarea>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Are there any specific areas where you believe our cab service could improve?</mat-label>
              <textarea matInput></textarea>
            </mat-form-field>

            <mat-form-field>
              <mat-label>What additional services or features would you like to see offered?</mat-label>
              <textarea matInput></textarea>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Is there anything else you would like to share about your experience with our cab service? </mat-label>
              <textarea matInput></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary">Submit</button>
        </mat-expansion-panel>




      </mat-accordion>

    </article>

   </section>
  `,
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

/* iPads/tablet (portrait and landscape) */
/* @media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {
  .head {
    article {
      width: 100%;
    }
  }
} */
`]
})
export class FeedbackComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {}
}