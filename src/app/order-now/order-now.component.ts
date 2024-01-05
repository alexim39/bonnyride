import { Component, OnDestroy, OnInit } from '@angular/core';
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


export interface OrderNowFormData {
  names: string;
  phoneNumber: string;
  selectedPoints: string;
  selectedCarCategory: CarDetails | null; // Allow null
  selectedTime: string;
  selectedDate?: Date;
  cost: number;
}


/**
 * @title Cap Order component
 */
@Component({
  selector: 'async-order-now',
  standalone: true,
  providers: [PaystackService],
  imports: [MatButtonModule, MatProgressBarModule, ReactiveFormsModule, MatDividerModule, MatIconModule, CommonModule, MatExpansionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, MatNativeDateModule, MatSelectModule],
  templateUrl: 'order-now.component.html',
  styleUrls: ['order-now.component.scss']
})
export class OrderNowComponent implements OnInit, OnDestroy {

  pricingData: { [key: string]: number } = distancePriceData;

  pickupPoints: string[] = [];
  selectedPointsControl = new FormControl();
  selectedCarCategory!: CarDetails;
  selectedTime!: string;
  form!: FormGroup;
  subscriptions: Subscription[] = [];

  isSpinning: boolean = false;




  availableCars: CarDetails[] = [];
  selectedCarDetails: CarDetails | null = null;

  constructor(
    private paystackService: PaystackService,
  ) {}



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
      selectedCarCategory: new FormControl(null, {
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
      phoneNumber: new FormControl('', {
        validators:
          [
            Validators.required,
            Validators.pattern('0\\d{10}') // Nigerian phone number format
          ], updateOn: 'change'
      })
    });

    this.initializePickupPoints(); // Move the initialization logic here

    this.availableCars = [
      { id: '123', make: 'Toyota', model: 'Corolla', year: 2022, licensePlate: 'ABC123', driverName: 'John Doe', driverNumber: '1234567890', currentLocation: 'City Center', image: 'assets/img/reg_cars/slazzer.jpg' },
      { id: '456', make: 'BMW', model: 'Xyia', year: 2012, licensePlate: 'ABC456', driverName: 'John Doe', driverNumber: '68754444365', currentLocation: 'Bonny Island', image: 'assets/img/reg_cars/slazzer.jpg' },
      // Add more cars as needed
    ];


  }


  private initializePickupPoints(): void {
    this.pickupPoints = Object.keys(this.pricingData);
    if (this.pickupPoints.length > 0) {
     this.selectedPointsControl.setValue(this.pickupPoints[0]); // Set a default selection if needed
    }
  }

  private initiatePayment(orderFormData: OrderNowFormData): void {
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

  calculateTransportationCost() {
    const routeKey = this.form.get('selectedPoints')?.value;
    const basePrice = this.pricingData[routeKey] || 0;
    return basePrice;
  }


  OrderNow(formObject: OrderNowFormData) {
    this.isSpinning = true;

    if (this.form.valid) {

      const formObject: OrderNowFormData = {
        names: this.form.get('names')?.value,
        selectedPoints: this.form.get('selectedPoints')?.value,
        selectedCarCategory: this.selectedCarDetails,
        selectedTime: this.form.get('selectedTime')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        cost: this.calculateTransportationCost()
      };

      console.log('Form Data:', formObject);
      // Perform other actions or submit the form as needed

      // show payment
      //this.initiatePayment(formObject);
    }
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  onCarCategoryChange() {
    // Find the selected car details based on the selectedCarCategory
    this.selectedCarDetails = this.availableCars.find(car => car.id === this.selectedCarCategory.id) ?? null;
  }

}