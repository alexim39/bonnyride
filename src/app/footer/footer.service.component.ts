import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'async-footer-service',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
      <section>
        <h2>Our Services</h2>

        <article>
          <strong>Async Edge Limited</strong>
          <p>
            <a routerLink="cab-services" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"> <strong>Cab Services</strong></a><br><br>
            <a routerLink="courier-services" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><strong>Courier Services</strong></a><br><br>
            <a routerLink="tow-services" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><strong>Tow Truck Services</strong></a>
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
export class FooterServiceComponent {}
