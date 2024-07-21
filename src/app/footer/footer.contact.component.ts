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
            <a routerLink="about-async" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()"><strong>About Us</strong></a><br><br>
            <a routerLink="contacts" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="scrollToTop()"><strong>Contact Us</strong></a>
          </p>
          <p> <strong>Head Office:</strong> <br>  54 Nkpor, Rumuolumeni. Port Harcourt, Rivers State.</p>
          <p> <strong>Bonny Island: </strong><br>  87 MG Hart Lane, Wilbros road. Bonny Island, Rivers State.</p>
        </article>

        <article><br>
          <strong>Email</strong>
          <p> 
            <a>contacts&#64;async.ng,</a> <br><br> 
            <a>async.contacts&#64;gmail.com </a>
          </p>
        </article>

        <article>
          <strong>Phone</strong>
          <p> <a href="tel:09131301019"><strong>091 3130 1019</strong></a> </p>

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
            margin-left: 2em;
            border-bottom: 1px solid gray;
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

  // scroll to top when clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* lunchWhatsAppGroup() {
    window.open('https://wa.me/message/BQ4PN6TYXNE5D1', '_blank');
  } */
}
