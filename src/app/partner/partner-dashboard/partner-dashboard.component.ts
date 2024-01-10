import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { LogoComponent } from 'src/app/_common/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'async-partner-dashboard',
  standalone: true,
  imports: [ MatToolbarModule, MatButtonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule, AsyncPipe, NgIf, LogoComponent],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport
          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="(isHandset$ | async) === false">

        <mat-toolbar class="profile">
          <div class="card">
            <img src="assets/img/sample-pr.PNG">
            <h1>John Doe</h1>
            <p class="title">CEO & Founder, Example</p>
          </div>
        </mat-toolbar>

        <mat-nav-list>
          <a mat-list-item routerLink="#" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><i class="fa fa-dashboard"></i> Dashboard</a>
          <a mat-list-item routerLink="#" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><i class="fa fa-taxi"></i> Add Car</a>
          <a mat-list-item routerLink="#" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><i class="fa fa-dollar"></i> Payment</a>
          <a mat-list-item routerLink="#" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><i class="fa fa-steam"></i> Work preferences</a>
          <a mat-list-item routerLink="#" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><i class="fa fa-cog"></i> Settings</a>
        </mat-nav-list>
        
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <async-logo [color]="'white'"></async-logo>
        </mat-toolbar>
        <!-- Add Content Here -->
        <section class="content-area">
          some contents here
        </section>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['partner-dashboard.component.scss'],
})
export class PartnerDashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
