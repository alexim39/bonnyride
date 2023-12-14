import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TypingComponent } from './typing/typing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-index-banner',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, TypingComponent],
  template: `
    <section>
      <header>
        <aside>
          <video autoplay muted loop [poster]="posterSource">
            <source [src]="videoSource" type="video/webm">
          </video>

          <article>
            <h1>
            Order a cab service that's available in Bonny 247, day or night <br> <em></em> <br> <span>091 3130 1019</span>
            </h1>

            <h3>
              <async-typing></async-typing>
            </h3>

            <div class="btn">
              <a id="get-account" mat-raised-button routerLink="order-now" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">ORDER NOW</a>
              <!-- <a id="get-account" mat-raised-button href="tel:09130311019">CALL US NOW: 09130311019</a> -->
              <a id="book-now" mat-raised-button color="accent" routerLink="book-later" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">BOOK FOR LATER</a>
              <!-- <a id="book-now" mat-raised-button color="accent" (click)="lunchWhatsAppGroup()">BOOK US NOW</a> -->
            </div>
          </article>

        </aside>
      </header>
    </section>
  `,
  styleUrls: [`banner.component.scss`],
})
export class BannerComponent implements OnInit, OnDestroy  {
  subscriptions: Subscription[] = [];

  posterSource: string = 'assets/img/bck1.png';
  videoSource: string = 'assets/vid/bck1.mp4';

  constructor(
    public dialog: MatDialog,
  ) {}


  ngOnInit(): void {}

  lunchWhatsAppGroup() {
    window.open('https://wa.me/message/BQ4PN6TYXNE5D1', '_blank');
  }

  ngOnDestroy(): void {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
