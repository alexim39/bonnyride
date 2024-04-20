import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-index-why-we-exist',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule,  MatFormFieldModule, MatInputModule, CommonModule],
  template: `
    <aside class="why-we-exist">
      <div>
        <span class="mark"><strong>Rides: </strong>Quickly and conveniently get where you need to go</span>
        <span class="mark"><strong>Delivery: </strong>Fast, Secure, Affordable and Convenient way to send a package where it needs to go</span>
        <span><strong>Towing: </strong>Easily get a towing assistance to get you back on the road quickly.</span>
        <!-- <span> Bet Investment</span> -->
      </div>


      <!-- <h1>We firmly believe that you can have a comfortable journey to your destination at any hour, whether it’s day or night.</h1> -->
      <h1>Bonnyride: Your Ride, Delivery, and Towing Partner on Bonny Island</h1>

      <!-- <small>Use our flexible learning path, adjust your learning to suit your time  — all in one place. Open a free account in minutes and learn any time.</small> -->

      <a mat-flat-button color="primary" href="tel:09130311019">CALL NOW</a>
    </aside>
  `,
  styles: [`
  aside {
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      margin: 1em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .mark {
          border-right: 1px dotted #bbb;
        }
      span {
        margin: 0.4em;
        color: #AD1457;
        font-family: Verdana;
        
        strong {
          display: block;
          margin-bottom: 0.5em;
        }
      }
    }
    h1 {
      font-weight: bolder;
      margin: 1em;
    }
    small {
      text-align: justify;
      margin: 0 1em;
    }
  }


  /* Media Query for Mobile Responsiveness */
@media screen and (max-width: 600px) {
  aside {
    div {
      margin: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .mark {
        border-bottom: 1px dotted #bbb;
        border-right: 0px dotted #bbb;
        padding-bottom: 1em;
      }
    }
  }
}
  `],
})
export class WhyWeExistComponent implements OnInit{
  // init subscriptions list
  subscriptions: Subscription[] = [];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {  }



  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
