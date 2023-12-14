import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

/**
 * @title Order now component
 */
@Component({
  selector: 'async-order-now',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  template: `
  <section class="head">

  <article>
      <h2>Order A BonnyRide Cab</h2>
      <!-- <h3>{{course.subTitle}}</h3> -->
      <p>Use below form to complete your ride booking</p>
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
          <input matInput>
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
export class OrderNowComponent {
  panelOpenState = false;
}