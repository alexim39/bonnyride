import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

/** @title Simple form field */
@Component({
  selector: 'async-about-async',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatIconModule, MatSelectModule],
  template: `
      <div class="about-training">
        <div class="text-content">
          <h1>
          Async Groups - Powering Nigeria’s Future.
          </h1>

          <p>
            We are a conglomerate of forward-thinking companies, Async Solutions Limited and Async Edge Limited, dedicated to delivering top-tier solutions to both public and private sectors. 
          </p>

          <p>
            Our IT arm, Async Solutions, harnesses the power of technology to drive innovation, while Async Edge provides robust transportation and logistics services. Together, we’re shaping the future of Nigeria, one solution at a time.
        </div>
      </div>

  `,
  styles: [`
    .about-training {
        padding: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #eee;
        .text-content {
          text-align: center;
          h1 {
            color: #00838F;
            font-size: 3em;
          }

          p {
            text-align: justify;
            font-family: system-ui;
            width: 45em;
          }
        }
      }


/* Extra small devices (phones, 750px and down) */
@media only screen and (max-width: 750px) {

    .about-training {
      padding: 1em;
      .text-content {
        h1 {
          font-size: 1.5em;
        }
        p {
          width: 100%;
        }
      }
    }
  }

  `],
})
export class AboutAsyncComponent {}
