import { AfterViewInit, Component, OnDestroy, OnInit, Inject, ViewChild } from '@angular/core';
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
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as distancePriceData from '../_common/json/distancePrice.json';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PaystackService } from '../_common/services/paystack.service';
import { Subscription } from 'rxjs';
import { CarDetails } from '../_common/car-details.interface';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { StepperOrientation, MatStepperModule, MatStepper } from '@angular/material/stepper'; // Import StepperOrientation
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';

export interface SenderDetailsInterfacer {
  senderEmailCtrl: string;
  senderNameCtrl: string;
  senderPhoneCtrl: string;
  pickUpAddressCtrl: string;
}

export interface RecipientDetailsInterfacer {
  recipientNameCtrl: string;
  recipientPhoneCtrl: string;
  deliveryAddressCtrl: string;
}

export interface PackageDetailsInterfacer {
  noOfPackageCtrl: string;
  estimatedWeightCtrl: string;
  descriptionCtrl: string;
  instructionCtrl?: string;
}


/**
 * @title Courier booking component
 */
@Component({
  selector: 'async-tow-booking',
  standalone: true,
  providers: [PaystackService],
  imports: [MatButtonModule, MatProgressBarModule, MatTableModule, MatSlideToggleModule, MatCardModule, RouterModule, MatStepperModule, ReactiveFormsModule, MatDividerModule, MatIconModule, CommonModule, MatExpansionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, MatNativeDateModule, MatSelectModule],
  templateUrl: 'tow-booking.component.html',
styleUrls: ['tow-booking.component.scss', 'tow-booking.mobile.scss']
})
export class TowBookingComponent implements OnInit, OnDestroy  {
  isMobile: boolean = false;

  subscriptions: Subscription[] = [];

  isSpinning: boolean = false;

  orientation: StepperOrientation = 'horizontal'; // Set initial orientation

  senderFormGroup!: FormGroup;
  recipientFormGroup!: FormGroup;
  paymentFormGroup!: FormGroup;
  packageFormGroup!: FormGroup;
  @ViewChild('stepper') stepper!: MatStepper; // Get stepper reference

  isLinear = true;

  senderDetails!: SenderDetailsInterfacer;
  recipientDetails!: RecipientDetailsInterfacer;
  packageDetails!: PackageDetailsInterfacer;
  isToggled = false;

  
  constructor(
    private paystackService: PaystackService,
    private formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) { }



  ngOnInit() {

    this.subscriptions.push(
      this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(state => {
        this.isMobile = state.matches; // Access 'matches' property directly
        if (this.isMobile) {
          this.orientation = 'vertical';
        } else {
          this.orientation = 'horizontal';
        }
      })
    )

    this.senderFormGroup = this.formBuilder.group({
      senderNameCtrl: ['', [Validators.required, Validators.minLength(3)]],
      senderPhoneCtrl: ['', [Validators.required, Validators.pattern(/^(?:\+234|0)[\d]{7,10}$/)]],
      senderEmailCtrl: ['', Validators.email],
      pickUpAddressCtrl: ['', Validators.required],
    });
    
  
    this.recipientFormGroup = this.formBuilder.group({
      recipientNameCtrl: ['', [Validators.required, Validators.minLength(3)]],
      recipientPhoneCtrl: ['', [Validators.required, Validators.pattern(/^(?:\+234|0)[\d]{7,10}$/)]],
      deliveryAddressCtrl: ['', Validators.required],
    });
  
  
    this.packageFormGroup = this.formBuilder.group({
      noOfPackageCtrl: ['', [Validators.required, Validators.pattern(/^\d.*$/)]],
      estimatedWeightCtrl: ['', [Validators.required, Validators.pattern(/^\d.*$/)]],
      descriptionCtrl: ['', Validators.required],
      instructionCtrl: [''],
    });
  
    this.paymentFormGroup = this.formBuilder.group({
      //firstCtrl: ['', Validators.required],
    });

  }

  getSenderDetails(senderDetails: SenderDetailsInterfacer) {
    this.senderDetails = senderDetails;
    console.log('==== ',this.senderDetails)
  }

  getRecipientDetails(recipientDetails: RecipientDetailsInterfacer) {
    this.recipientDetails = recipientDetails;
    console.log('==== ',this.recipientDetails)
  }

  getPackageDetails(packageDetails: PackageDetailsInterfacer) {
    this.packageDetails = packageDetails;
    console.log('==== ',this.packageDetails)
  }
 


  onToggleChange(event: MatSlideToggleChange) {
    this.isToggled = event.checked;
  }




  private initiatePayment(orderFormData: SenderDetailsInterfacer): void {
    this.subscriptions.push(
      //this.paystackService.initiatePayment(orderFormData).subscribe(response => {
        // Handle the response from Paystack, which may include a redirect URL for payment
       //window.open(response.data.authorization_url, "_self");
       //window.open(response.data.authorization_url, "_blank");

      //})
    )
  }


 



  BookNow(formObject: SenderDetailsInterfacer) {
    this.isSpinning = true;

    //if (this.form.valid) {
      // Access the form data here
      // const formObject: CourierBookingFormData = {
      //   names: this.form.get('names')?.value,
      //   selectedPoints: this.form.get('selectedPoints')?.value,
      //   selectedCarCategory: this.form.get('selectedCarCategory')?.value,
      //   selectedTime: this.form.get('selectedTime')?.value,
      //   selectedDate: this.form.get('selectedDate')?.value,
      //   phoneNumber: this.form.get('phoneNumber')?.value,
      //   cost: this.calculatedCost
      // };

      //console.log('Form Data:', formObject);
      // Perform other actions or submit the form as needed

      // show payment
      this.initiatePayment(formObject);
    //}
  }

  ngOnDestroy() {
    // unsubscription
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
    // Clear the array (optional)
    this.subscriptions.length = 0;
  }


}