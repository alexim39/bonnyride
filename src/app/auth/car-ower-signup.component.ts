import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
/**
 * @title Car owner signup
 */
@Component({
    selector: 'async-car-owner-signup',
    standalone: true,
    imports: [MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, RouterModule],
    template: `
      <div class="main-container">
        <div class="content">

          <div class="left-content">
            <div class="bold-text">Join Bonnyride with your car and earn more</div>
            <div class="normal-text">
              As a car owner and Bonnyride partner, you can manage your assets from one easy-to-use dashboard and grow your transport business
            </div>
          </div>

          <div class="right-panel">
            <div class="panel-content">
              <form>
              <h2>Car owner sign up</h2>

              <div class="names-field">
                <mat-form-field appearance="outline">
                  <mat-label>Name</mat-label>
                  <input matInput>
                </mat-form-field>
                <mat-form-field appearance="outline">
                  <mat-label>Surname</mat-label>
                  <input matInput>
                </mat-form-field>
              </div>

              <mat-form-field appearance="outline">
                <mat-label>Phone Number</mat-label>
                <input matInput type="tel">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Email Address</mat-label>
                <input matInput type="email">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Enter your password</mat-label>
                <input matInput [type]="hide ? 'password' : 'text'">
                <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
                  <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
              </mat-form-field>

              <button mat-flat-button color="primary">Sign up</button>
              </form>

              <p>Already have an account? <a routerLink="../../../auth/car-owner" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Sign in</a></p>

              <p>By Signing up, you agree to our <a href="">Terms of Service</a> and <a href=""> Privacy policy</a></p>

            </div>
          </div>
        </div>
      </div>

      <div class="benefit">
        test
      </div>
  `,
    styles: [`

.main-container {
    background: url('/assets/img/cos.jpg') no-repeat center center;
    background-size: cover;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      display: flex;
      width: 80%;
      .left-content {
        flex: 1;
        padding: 20px;
        color: white;
        .bold-text {
          font-weight: bold;
          font-size: 4em;
          margin-bottom: 1em;
        }
        .normal-text {
          font-size: 1.1em;
          width: 70%;
          font-family: cursive;
        }
      }
      .right-panel {
        flex: 1;
        .panel-content {
          width: 60%;
          height: inherit;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          padding: 0 2em 2em 2em;
          margin: 20px;
          form {
            display: flex;
            flex-direction: column;
            .names-field {
              display: flex;
              justify-content: space-between;
             
            }
          }
          p {
            font-family: cursive;
            margin-top: 2em;
            a {
              color: #00838F;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  .benefit {
    height: 40hv;
  }

  /* Media Query for Mobile Responsiveness */
  @media screen and (max-width: 600px) {
    .main-container {
      .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        .left-content {
          .bold-text {
            font-size: 2em;
          }
          .normal-text {
            font-size: 1em;
            width: 100%;
          }
        }
        .right-panel {
          .panel-content {
            width: auto;
          }
        }
      }
    }

    
  }

  `]
})
export class CarownerSignupComponent {
  hide = true;
}