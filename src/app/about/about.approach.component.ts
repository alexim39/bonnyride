import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AboutStoryComponent } from './about.story.component';

/** @title Async training approach page */
@Component({
  selector: 'async-about-approach',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatIconModule, MatSelectModule, AboutStoryComponent],
  template: `

      <div class="training-approach">

        <div class="approach-card">
          <div class="title">
            <mat-icon fontIcon="water_drop"></mat-icon>
            <h1>Customer-Centric Solutions</h1>
          </div>
          <div class="content">
              <p>
              At Async Groups, we believe in putting our customers first. We strive to understand their unique needs and challenges, and tailor our services accordingly. 
              Whether it’s a custom IT solution from Async Solutions Limited or a logistics strategy from Async Edge Limited, we ensure our solutions align with our customers’ goals and deliver real value.              </p>
          </div>
        </div>

        <div class="approach-card">
          <div class="title">
            <mat-icon fontIcon="lightbulb"></mat-icon>
            <h1>Innovation and Technology</h1>
          </div>
          <div class="content">
              <p>
              In the rapidly evolving digital landscape, staying ahead of the curve is crucial. Async Solutions Limited leverages the latest technologies to provide innovative IT solutions that drive efficiency and competitiveness. 
              Similarly, Async Edge Limited uses advanced logistics technology to ensure reliable and efficient transportation services.              </p>
            </div>
        </div>

        <div class="approach-card">
          <div class="title">
            <mat-icon fontIcon="approval_delegation"></mat-icon>
            <h1>Reliability and Efficiency</h1>
          </div>
          <div class="content">
            <p>
            We understand that our customers rely on us to keep their operations running smoothly. That’s why we prioritize reliability and efficiency in all our services. 
            From ensuring uptime in IT systems to timely delivery in our logistics operations, we’re committed to providing services our customers can depend on.
            </p>
          </div>
        </div>

        <div class="approach-card">
          <div class="title">
            <mat-icon fontIcon="supervised_user_circle"></mat-icon>
            <h1>Continuous Improvement</h1>
          </div>

          <div class="content">
            <p>
            We believe in the power of continuous improvement. We regularly gather feedback from our customers and use it to refine our services. 
            By constantly striving to do better, we ensure that our services not only meet but exceed our customers’ expectations.            </p>
          </div>
        </div>

      </div>

  `,
  styles: [`
    .training-approach {
      background-color: #00838F;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 3em;
      align-items: center;

      .approach-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          color: white;
          h1 {
            font-size: 1.5em;
            margin-top: -0.2em;
            font-family: system-ui;
          }
          mat-icon {
            border-radius: 50%;
            color: white;
            border: 1px solid white;
            transform: scale(2);
            margin-right: 1em;
          }
        }

        .content {
          color: white;
          font-size: 0.9em;
          padding-left: 3em;
          p {
            line-height: 2em;
            text-align: justify;
          }
        }
      }
    }


/* Extra small devices (phones, 1500px and down) */
@media only screen and (max-width: 1500px) {
  .training-approach {
      display: flex;
      flex-direction: column;
      .approach-card {
        margin-top: 2em;
      }
  }
}
  `],
})
export class AboutApproachComponent {}
