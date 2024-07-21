import {Component} from '@angular/core';
import { RouterModule } from '@angular/router';


/**
 * @title Application top notifcation banner
 */
@Component({
  selector: 'async-notification-banner',
  standalone: true,
  imports: [ RouterModule],
  template: `
    <section>
        <p><!-- Elevate your skills in Word, Excel, PowerPoint, Teams, and Outlook for maximum workplace productivity. --> 
          <a href="https://wa.me/message/GQ6P3GATFO4IB1" target="_blank">Take advantage of our free delivery offer while it lasts! Chat with us now!</a>
        </p>
    </section>
  `,
  styles: [`
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #00838F;
        color: white;
        font-family: ui-rounded;
        padding-left: 1em;
        padding-right: 1em;
        a {
            text-decoration: none;
            color: white; 
            font-size: 1.5em;   
            color: orange;  
            font-weight: bolder;    
        }

        a {
            animation: blink 1.5s infinite;
            mat-icon {
              font-size: 1.2em;
            }
        }

        @keyframes blink {
            0%, 50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
  `]
})
export class NotificationBannerComponent {

  /* lunchWhatsAppGroup() {
    window.open('https://wa.me/message/GQ6P3GATFO4IB1', '_blank');
  } */

}