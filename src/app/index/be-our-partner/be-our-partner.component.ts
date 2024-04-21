import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

/**
 * @title Be Our Partner Page
 */
@Component({
    selector: 'async-be-our-partner',
    imports: [MatListModule, MatDividerModule, RouterModule],
    standalone: true,
    styles: [`
        .partner-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-grow: 1;
            padding: 4em;
            border-bottom: 0.5px dotted #eee;
            .img-content {
                width: 50%;
                margin-bottom: -0.5em;
                img {
                width: 100%;
                border-radius: 5%;
                border: 0.5px solid grey;
            }
        }
      .text-content {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2em;
        h1 {
          text-align: right;
          //color: black;
          .title {
            font-size: 0.5em;
            text-align: left;
            color: teal;
            display: block;
            padding-bottom: 1em;
          }
          .word {
            text-align: left;
            display: block;
          }
        }
        p {
          text-align: left;
          font-family: system-ui;
          width: 70%;
        }
        .partner-signup {
          margin-top: 2em;
          a {
            color:#ffab40;
            text-decoration: none;
            text-align: right;
          }
        }
      }
    }


/* Extra small devices (phones, 750px and down) */
@media only screen and (max-width: 750px) {
  .partner-container {
    display: flex;
    flex-direction: row;
    padding: 1em;


    .img-content {
      display: none;
    }
    .text-content {
      width: 100%;
      text-align: justify;
      p {
          width: 100%;
          text-align: justify;
        }
    }
  }
}
  `],
    template: `

<div class="partner-container">

    <div class="img-content">
        <img src="assets/img/be-our-partner.png" alt="Bonnyride partner">
    </div>

    <div class="text-content">
      <h1>
          <div class="title"> Be Our Partner With Your Vehicle</div>      
          <div class="word"> Drive when you want,<br> and earn as much as you need.</div> 
      </h1>

        <p>
            Sign-up below to Join Bonnyride now. You drive and earn with your car at your own schedule.
        </p>

        <p>
            If you own a car that you want to register with Bonnyride, BUT YOU DON'T WANT TO DRIVE IT YOURSELF? We understand! 
            You can partner with Bonnyride by registering the car on our platform and hire a driver from our pool of trained drivers who can handle your car with care and make weekly/monthly returns to you.           
        </p>

        <div class="partner-signup">
          <a mat-button color="accent" routerLink="auth/partner" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()">Sign up Now <i class="fa fa-angle-double-right"></i></a>
        </div>

    </div>

</div>
  `
})
export class BeOurPartnerComp {
  // scroll to top when clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}