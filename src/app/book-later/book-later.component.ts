import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as distancePriceData from '../_common/json/distancePrice.json';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PaystackService } from '../_common/services/paystack.service';
import { Subscription } from 'rxjs';
import { CarDetails } from '../_common/car-details.interface';

export interface BookForLaterFormData {
  names: string;
  phoneNumber: string;
  selectedPoints: string;
  selectedCarCategory: CarDetails | null; // Allow null
  selectedTime: string;
  selectedDate: Date;
  cost: number;
}

/**
 * @title Cap booking component
 */
@Component({
  selector: 'async-book-later',
  standalone: true,
  providers: [PaystackService],
  imports: [MatButtonModule, MatProgressBarModule, ReactiveFormsModule, MatDividerModule, MatIconModule, CommonModule, MatExpansionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, MatNativeDateModule, MatSelectModule],
  template: `
 
   <section class="head">
   <article>
      <h2>Book A BonnyRide Cab for Later Use</h2>
      <p>Use below form to complete your ride booking for later</p>
    </article>
  </section>


  <section class="body">
    <article class="writeup">
    <mat-progress-bar color="accent" mode="indeterminate" *ngIf="isSpinning"></mat-progress-bar>
      <h3>Cab Boorking Form</h3>

      <form class="form" [formGroup]="form" (ngSubmit)="OrderNow(form.value)">

        <mat-form-field appearance="outline">
          <mat-label>Names</mat-label>
          <input matInput formControlName="names">
          <!-- <mat-hint>Name is optional for anonymity</mat-hint> -->
          <mat-error *ngIf="form.get('names')?.hasError('required')">
              Your name is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Phone Number</mat-label>
          <input matInput formControlName="phoneNumber" [maxlength]="11">
          <!-- <mat-hint>Phone number is optional for anonymity</mat-hint> -->
          <mat-error *ngIf="form.get('phoneNumber')?.hasError('required')">
              Your phone number is required
          </mat-error>
          <mat-error *ngIf="form.get('phoneNumber')?.hasError('pattern')">
            Please enter a valid phone number
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Choose a date</mat-label>
          <input matInput [matDatepicker]="picker" formControlName="selectedDate" [matDatepickerFilter]="dateFilter">
          <mat-hint>MM/DD/YYYY</mat-hint>
          <mat-error *ngIf="form.get('selectedDate')?.hasError('required')">
              Please set date for the movement
          </mat-error>
          <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Enter a time</mat-label>
          <input matInput type="time" formControlName="selectedTime">
          <mat-hint>HH:MM AM/PM</mat-hint>
          <mat-error *ngIf="form.get('selectedTime')?.hasError('required')">
              Please set time for the movement
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Search pick-up to drop-off points</mat-label>
          <input
            matInput
            placeholder="Select Pick-up to drop-off point"
            [formControl]="selectedPointsControl"
            [matAutocomplete]="auto"
            formControlName="selectedPoints"
          />
          <mat-autocomplete #auto="matAutocomplete" (optionSelected)="onSelectionChange($event)" [displayWith]="displayWith">
            <mat-option *ngFor="let point of filteredPickupPoints()" [value]="point">
              {{ point }}
            </mat-option>
          </mat-autocomplete>
          <mat-error *ngIf="form.get('selectedPoints')?.hasError('required')">
              Please choose pickup and drop-off points
          </mat-error>
        </mat-form-field>

    

        <mat-form-field appearance="outline">
          <mat-label>Car category</mat-label>
          <mat-select id="carCategory" [(ngModel)]="selectedCarCategory" (selectionChange)="calculateTransportationCost()" formControlName="selectedCarCategory">
            <mat-option value="Economy">Economy</mat-option>
            <mat-option value="Standard">Standard</mat-option>
            <mat-option value="Luxury">Luxury</mat-option>
          </mat-select>
          <mat-error *ngIf="form.get('selectedCarCategory')?.hasError('required')">
              Please choose car category
          </mat-error>
        </mat-form-field>


        <div class="cost-msg" *ngIf="calculatedCost !== undefined && calculatedCost !== 0">
          <p> The fare cost will be: <span>{{calculatedCost  | currency:"NGN":"&#8358;"}}</span></p>
        </div>


        <div class="button-container">
          <!-- <button mat-flat-button color="accent" [disabled]="!calculatedCost" (click)="calculateTransportationCost()">Check Price</button> -->
          <button mat-raised-button color="primary" [disabled]="form.invalid || isSpinning || !calculatedCost">Pay to order now</button>
        </div>

        
      </form>
      
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
      width: 40%;
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
        flex-direction: column;
        gap: 0.5rem;
        mat-form-field {
          flex: 1;
         }
         .cost-msg {
          color: darkorange;
          font-weight: bolder;
          span {
            font-size: 1.5em;
          }
         }
         .button-container {
          text-align: right;
          button {
            margin-left: 1em;
            width: auto;
          }
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
      .button-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 0.5rem;
        button {
         flex: 1;
         width: 50%;
        }
        }
    }
    button {
      width: 100%;
    }
  }
}
}

/* iPads/tablet (portrait and landscape) */
@media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {
  .head {
    article {
      width: 100%;
    }
  }
  .form {
      .button-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        button {
          flex: 1;
          width: 100%;
        }
      }
    }
}
`]
})
export class BookLaterComponent implements OnInit, OnDestroy, AfterViewInit  {
  pricingData: { [key: string]: number } = distancePriceData;

  pickupPoints: string[] = [];
  selectedPointsControl = new FormControl();
  selectedCarCategory!: string;
  selectedTime!: string;
  calculatedCost!: number;
  form!: FormGroup;
  subscriptions: Subscription[] = [];

  isSpinning: boolean = false;



  constructor(
    private paystackService: PaystackService,
  ) { }


  dateFilter = (date: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset hours, minutes, seconds, and milliseconds to compare dates only

    return !date || date >= today;
  };



  ngOnInit() {

    this.form = new FormGroup({
      names: new FormControl('', {
        validators:
          [
            Validators.required,
          ], updateOn: 'change'
      }),
      selectedPoints: new FormControl('', {
        validators:
          [
            Validators.required,
          ], updateOn: 'change'
      }),
      selectedCarCategory: new FormControl('', {
        validators:
          [
            Validators.required,
          ], updateOn: 'change'
      }),
      selectedTime: new FormControl('', {
        validators:
          [
            Validators.required,
          ], updateOn: 'change'
      }),
      selectedDate: new FormControl('', {
        validators:
          [
            Validators.required,
          ], updateOn: 'change'
      }),
      phoneNumber: new FormControl('', {
        validators:
          [
            Validators.required,
            Validators.pattern('0\\d{10}') // Nigerian phone number format
          ], updateOn: 'change'
      })
    });

    this.initializePickupPoints(); // Move the initialization logic here

  }


  private initializePickupPoints(): void {
    this.pickupPoints = Object.keys(this.pricingData);
    if (this.pickupPoints.length > 0) {
     this.selectedPointsControl.setValue(this.pickupPoints[0]); // Set a default selection if needed
      this.calculateTransportationCost(); // Initial calculation
    }
  }

  private initiatePayment(orderFormData: BookForLaterFormData): void {
    this.subscriptions.push(
      this.paystackService.initiatePayment(orderFormData).subscribe(response => {
        // Handle the response from Paystack, which may include a redirect URL for payment
       window.open(response.data.authorization_url, "_self");
       //window.open(response.data.authorization_url, "_blank");
      //window.location.href = response.data.authorization_url;

      })
    )
  }


  onSelectionChange(event: MatAutocompleteSelectedEvent): void {
    this.form.get('selectedPoints')?.setValue(event.option.value);

    // Handle the selection change here
    this.calculateTransportationCost();
  }

  calculateTransportationCost() {    
    
    const routeKey = this.form.get('selectedPoints')?.value;
    const basePrice = this.pricingData[routeKey] || 0;

    // Adjust the base price based on the car category
    let multiplier = 1.0;
    switch (this.selectedCarCategory) {
      case 'Economy':
        multiplier = 1.0; //1.0
        break;
      case 'Standard':
        multiplier = 1.3; //1.2
        break;
      case 'Luxury':
        multiplier = 1.6; //1.5
        break;
      default:
        break;
    }

    this.calculatedCost = basePrice * multiplier;
  }

  private filterPickupPoints(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.pickupPoints.filter(point => point.toLowerCase().includes(filterValue));
  }

  filteredPickupPoints(): string[] {
    const filterValue = this.selectedPointsControl.value?.toLowerCase() || '';
    return this.filterPickupPoints(filterValue);
  }
  
  displayWith(value: string): string {
    return value ? value : '';
  }


  OrderNow(formObject: BookForLaterFormData) {
    this.isSpinning = true;

    if (this.form.valid) {
      // Access the form data here
      const formObject: BookForLaterFormData = {
        names: this.form.get('names')?.value,
        selectedPoints: this.form.get('selectedPoints')?.value,
        selectedCarCategory: this.form.get('selectedCarCategory')?.value,
        selectedTime: this.form.get('selectedTime')?.value,
        selectedDate: this.form.get('selectedDate')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        cost: this.calculatedCost
      };

      //console.log('Form Data:', formObject);
      // Perform other actions or submit the form as needed

      // show payment
      this.initiatePayment(formObject);
    }
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  ngAfterViewInit() {
   /*  // Set minimum date to today
    const today = new Date();
    const todayTimestamp = today.getTime(); // Get the timestamp of today

    const selectedDateControl = this.form.get('selectedDate');

    if (selectedDateControl) {
      selectedDateControl.setValidators([
        Validators.required,
        (control) => {
          const selectedDateTimestamp = control.value ? new Date(control.value).getTime() : null;
          return selectedDateTimestamp && selectedDateTimestamp >= todayTimestamp
            ? null
            : { minDate: true };
        }
      ]);

      selectedDateControl.updateValueAndValidity(); // Trigger validation update
    } */
  }

}