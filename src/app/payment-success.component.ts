import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

/**
 * @title Page not found component
 */
@Component({
    selector: 'async-payment-success',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, RouterModule],
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

.page{ 
    padding: 40px 0; 
    font-family: 'Arvo', serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

  

.payment-success { 
    background-image: url('~/src/assets/img/payment-success.svg');
    height: 200px;
    width: 30%;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 2.5em;
 }
 

.contant_box{ 
    margin-top:-50px;
    text-align: center;
    h2 {
        font-family: Cursive;
        color: green; 
    }
    p {
        padding: 1em 0;
    }
    button {
        padding: 1em;
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

    .payment-success { 
        height: 100px;
        width: 30%;
    }

    .contant_box{ 
        padding: 1em;
        h2 {
            font-family: Cursive;
            font-size:20px; 
            color: green;
        }
        p {
            padding: 1em 0;
        }
        button {
            padding: 1em;
        }
    }

}

`],
    template: `

<section class="head">

  <article>
      <h2>Payment Confirmation</h2>
      <!-- <h3>{{course.subTitle}}</h3> -->
      <p>Your Transaction Was Successfully Processed! Confirmation of Payment for Bonnyride order/booking</p>
    </article>

</section>



<section class="page">
    <div class="payment-success"></div>

    <div class="contant_box">
        <h2>Payment Success</h2>
        <p>A member of our Helpdesk Team will reach out to you shortly for further assistance</p>
        <button  mat-flat-button color="accent" routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">Go to Home</button>
    </div>
</section>
`,
})
export class PaymentSuccessComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {}
 }