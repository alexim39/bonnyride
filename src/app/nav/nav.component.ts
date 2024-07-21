import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LogoComponent } from '../_common/logo.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
// declare jquery as any
declare const $: any;
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationBannerComponent } from './notification-banner/notification-banner.component';
import { Emitters } from '../_common/emitters/emitters';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { BreadcrumbComponent } from '../_common/breadcrumb.component';
import { LoadingSpinnerService } from '../_common/services/loader/spinner.service';
import { LoadingSpinnerComponent } from '../_common/spinner.compnent';
import { ThemeTogglerService } from '../_common/services/theme-toggler.service';


@Component({
  selector: 'async-nav',
  standalone: true,
  providers: [],
  imports: [MatToolbarModule, BreadcrumbComponent, LoadingSpinnerComponent, MatDialogModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, LogoComponent, CommonModule, MatMenuModule, NotificationBannerComponent, HttpClientModule],
  template: `
  <async-loading-spinner *ngIf="loadingSpinnerService.isShowing()"></async-loading-spinner>
  <!--
    DO NOT REMOVE
   THIS IS A TEMPORARY NOTIFICATION BANNER - FOR TRAILING EVENT 
  -->
  <!-- <async-notification-banner></async-notification-banner> -->


   <mat-toolbar class="nav">
    <mat-toolbar-row>
      <span class="logo"><async-logo></async-logo></span>

      <span class="spacer"></span>
      <!-- Desktop View Menu -->
      <a class="view-on-desktop" color="primary" mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Home</a>
      <a class="view-on-desktop" color="primary" mat-button [matMenuTriggerFor]="services">Services <i class="fa fa-angle-down"></i></a>
      <a class="view-on-desktop" color="primary" mat-flat-button [matMenuTriggerFor]="cab_order">Order Cab <i class="fa fa-angle-down"></i></a>
      <a class="view-on-desktop" color="accent" mat-flat-button [matMenuTriggerFor]="sign_in">Sign in <i class="fa fa-angle-down"></i></a>
      <a class="view-on-desktop" mat-button [matMenuTriggerFor]="help_support">Help & Support <i class="fa fa-angle-down"></i></a>
      

      <!-- Whatsapp link -->
      <span matTooltip="Whatsapp Us" (click)="lunchWhatsAppGroup()" class="fa fa-whatsapp"></span>
      <!-- light and dark theme toggle -->
      <i matTooltip="Toggle light to dark mode" class="fa fa-moon-o" (click)="toggleTheme()" *ngIf="!isDarkMode"></i>
      <i matTooltip="Toggle dark to light mode" class="fa fa-sun-o" (click)="toggleTheme()" *ngIf="isDarkMode"></i>
      <!-- Mobile view toggler -->
      <i class="fa fa-bars" (click)="toggleMobileNav()" id="toggle"></i>
    </mat-toolbar-row>


    <mat-toolbar-row class="mobile-nav" id="mobile-nav" *ngIf="showMobileNav" style="margin-bottom: 1.5em !important;">
      <!-- Mobile View Menu -->
      <a mat-button color="primary" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Home</a>
      <a mat-button color="primary" [matMenuTriggerFor]="services">Services <i class="fa fa-angle-down"></i></a>
      <a mat-button color="primary" [matMenuTriggerFor]="cab_order">Order <i class="fa fa-angle-down"></i></a>
      <a mat-button color="accent" [matMenuTriggerFor]="sign_in">Sign in <i class="fa fa-angle-down"></i></a>
      <a mat-button [matMenuTriggerFor]="help_support">Support <i class="fa fa-angle-down"></i></a>
        
      <span class="spacer"></span>
    </mat-toolbar-row>

   </mat-toolbar>

<!-- dropdown menu for Order Cab -->
<mat-menu #cab_order="matMenu">
  <button mat-menu-item routerLink="cab-order" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Order instant ride</button>
  <button mat-menu-item routerLink="cab-booking" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Book cab for later</button>
</mat-menu>

<!-- dropdown menu for services -->
<mat-menu #services="matMenu">
  <button mat-menu-item routerLink="cab-services" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Cab Services</button>
  <button mat-menu-item routerLink="courier-services" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Courier Services</button>
  <button mat-menu-item routerLink="tow-services" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Tow Truck Services</button>
</mat-menu>

<!-- dropdown menu for Help & Support -->
<mat-menu #help_support="matMenu">
  <button mat-menu-item routerLink="contacts" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Contacts</button>
  <button mat-menu-item routerLink="feedback" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Customer feedback</button>
  <button mat-menu-item routerLink="price-list" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Price list</button>
  <button mat-menu-item routerLink="faq" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">FAQs</button>
</mat-menu>





<!-- App Dropdowns -->

<!-- dropdown menu for sign in -->
<mat-menu #sign_in="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="customer">Customer</button>
  <button mat-menu-item [matMenuTriggerFor]="partner">Partner</button>
</mat-menu>

<!-- sub dropdown menu for sign in -->
<mat-menu #customer="matMenu">
  <button mat-menu-item routerLink="auth/customer" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Sign in as customer</button>
  <button mat-menu-item routerLink="auth/customer/signup" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Sign up as customer</button>
</mat-menu>
<mat-menu #partner="matMenu">
  <button mat-menu-item routerLink="auth/partner" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Sign in as partner</button>
  <button mat-menu-item routerLink="auth/partner/signup" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Sign up as partner</button>
</mat-menu>

  `,
  styleUrls: [`nav.component.scss`]
})
export class NavComponent implements OnInit, OnDestroy {
  // init subscriptions list
  subscriptions: Subscription[] = [];

  isDarkMode: boolean = false;
  showMobileNav = false;

  authenticated = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private themeTogglerService: ThemeTogglerService,
    public loadingSpinnerService: LoadingSpinnerService
  ) { }

  // scroll to top when clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    // listern to auth event emitter to check if user is signed in or not
    this.subscriptions.push(
      Emitters.authEmitter.subscribe(
        (auth: boolean) => {
          this.authenticated = auth;
        }
      )
    )

    const currentTheme = this.themeTogglerService.getTheme();
    this.themeTogglerService.setTheme(currentTheme);
  }


  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }

  toggleTheme() {
    const currentTheme = this.themeTogglerService.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // toggle icon
    if (newTheme === 'dark') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
    this.themeTogglerService.setTheme(newTheme);
  }

  lunchWhatsAppGroup() {
    window.open('https://wa.me/message/GQ6P3GATFO4IB1', '_blank');
  }


  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
