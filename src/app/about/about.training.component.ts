import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

/** @title Simple form field */
@Component({
  selector: 'async-about-training',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatIconModule, MatSelectModule],
  template: `

      <div class="about-async">

        <div class="text-content">
          <h1>
            Async Edge Limited
          </h1>

            <p>
            Async Edge: Driving Nigeria’s Progress. As part of the Async Groups conglomerate, we specialize in transportation and logistics, ensuring the smooth flow of people, goods and services across Nigeria. 
            </p>

            <p>
            Our commitment to efficiency, reliability, and innovation sets us apart, making us a trusted partner in the public and private sectors. 
            With Async Edge, you’re not just moving forward, you’re accelerating towards a brighter future.
            </p>
        </div>

        <div class="img-content">
          <img src="assets/img/ttable.jpg" alt="About Async Solutions">
        </div>
      </div>


  `,
  styles: [`


    .about-async {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-grow: 1;
      .img-content {
        width: 50%;
        margin-bottom: -0.5em;
        img {
          width: 100%;
        }
      }

      .text-content {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2em;
        p {
          text-align: justify;
          font-family: system-ui;
        }
      }
    }





/* Extra small devices (phones, 750px and down) */
@media only screen and (max-width: 750px) {
  .about-async {
    display: flex;
    flex-direction: row;
    .img-content {
      display: none;
    }
    .text-content {
      width: 100%;
      h1 {
        font-size: 1.5em;
      }
      p {
        padding: 0.5em;
      }

    }
  }
}
  `],
})
export class AboutTrainingComponent {}
