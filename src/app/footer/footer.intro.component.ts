import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LogoComponent } from '../_common/logo.component';
import { FooterContactComponent } from './footer.contact.component';
import { FooterConnectedComponent } from './footer.connected.component';

@Component({
  selector: 'async-footer-intro',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, LogoComponent, FooterContactComponent, FooterConnectedComponent],
  template: `
 
      <section>
        <async-logo color="white" marginTop="0"></async-logo>

        <p>
          BonnyRide, a service provided by Async Edge Limited, is part of the larger Async Groups. 
          The Async Groups is a conglomerate of firms established with the aim of delivering top-tier solutions to both public and private sectors in Nigeria.        
        </p>

        <p>
          At Async, our goal is to enhance our clients’ value by offering them reliable solutions that are perfectly aligned with their operations and operational needs.        
        </p>

        <p>
        For us, it all boils down to one thing: <strong>Delivering Dependable Solutions.</strong>
        </p>
      </section>
      
  `,
  styles: [`
    section {
        width: 20em;
        text-align: left;
        p {
        font-size: 14px;
        text-align: justify;
        font-family:"Open Sans", sans;
        }
    }
    p {
    color: #ccc;
    font-size: 0.6em;
    }


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    section {
    width: 100%;
    }
}  

/* iPads/tablet (portrait and landscape) */
@media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {

    section {
    width: 100%;
    }
}

`]
})
export class FooterIntroComponent {}
