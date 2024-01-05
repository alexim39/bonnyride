import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'async-footer-contact',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
      <section>
        <h2>Contact Us</h2>

        <article>
          <strong>Async Groups</strong>
          <p>
            <a routerLink="about-async" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">About Us</a>
          </p>
          <!-- <p> Techzo Technologies Office: <br>  No. 28 Mission Road by Chaly Class. Bonny Island, Rivers State.</p> -->
        </article>

        <article>
          <strong>Email</strong>
          <p> contacts&#64;async.ng, <br>  async.contacts&#64;gmail.com</p>
        </article>

        <article>
          <strong>Phone</strong>
          <p> <a href="tel:09131301019">091 3130 1019</a> <br>  <!-- 080 8038 6208<br> -->
          <!-- <button mat-raised-button (click)="lunchWhatsAppGroup()">Chat on WhatsApp</button> -->
        </p>

        </article>

      </section>
  `,
  styles: [`
    section {
      display: flex;
      flex-direction: column;
      color: white;
      article {
        p {
          font-size: 14px;
          font-family:"Open Sans", sans;
          a {
            text-decoration: none;
            color: white;
          }
        }
        button {
          margin-top: 6px;
          font-size: 10px;
        }
      }
    }
  `]
})
export class FooterContactComponent {
  lunchWhatsAppGroup() {
    window.open('https://wa.me/message/BQ4PN6TYXNE5D1', '_blank');
  }
}
