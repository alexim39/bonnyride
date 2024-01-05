import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Subject, Subscription, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'async-index-testimonials',
  standalone: true,
  styleUrls: ['testimonials.component.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  template: `
   <article class="testimonial">
      <h1>Testimonials</h1>

      <div class="carousel">
        <section [@carouselAnimation]="currentIndex">
          <figure class="snip1139" *ngFor="let testimonial of visibleTestimonials(); let i = index">
            <blockquote class="quote">
              {{ testimonial.quote }}
              <div class="arrow"></div>
            </blockquote>
            <div class="author" style="text-align: center;">
              <img src="assets/img/sample-pr.PNG" alt="Customer image">
              <h5>{{ testimonial.author.name }} </h5>
            </div>
          </figure>
        </section>
        <button mat-icon-button (click)="prevTestimonial()" class="nav-button">
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button mat-icon-button (click)="nextTestimonial()" class="nav-button">
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>
    </article>
  `,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials = [
    {
      quote: "As a frequent traveler to Bonny Island, I’ve tried various cab services...",
      author: { name: "Brown Eunice", role: "BonnyRide customer" },
    },
    {
      quote: "BonnyRide has truly transformed my travel experience in Bonny Island...",
      author: { name: "Aliu Ibrahim", role: "BonnyRide customer" },
    },
    {
      quote: "I’ve been using BonnyRide for my travels around Bonny Island for a while now...",
      author: { name: "Chinasa Favour", role: "BonnyRide customer" },
    },
    {
      quote: "I will always recommend the cab service to anyone who needs reliable cab service in Bonny Island...",
      author: { name: "Juan Jumbo", role: "BonnyRide customer" },
    },
  ];

  currentIndex = 0;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // Auto slide every 5 seconds
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.nextTestimonial());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex =
      this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  /* visibleTestimonials(): any[] {
    const startIndex = this.currentIndex;
    const endIndex = (this.currentIndex + 2) % this.testimonials.length;

    if (startIndex < endIndex) {
      return this.testimonials.slice(startIndex, endIndex + 1);
    } else {
      return [...this.testimonials.slice(startIndex), ...this.testimonials.slice(0, endIndex + 1)];
    }
  } */

  visibleTestimonials(): any[] {
    const startIndex = this.currentIndex;
    const endIndex = (this.currentIndex + 2) % this.testimonials.length;

    if (startIndex < endIndex) {
      return this.testimonials.slice(startIndex, endIndex + 1);
    } else {
      return [
        ...this.testimonials.slice(startIndex),
        ...this.testimonials.slice(0, endIndex + 1),
      ];
    }
  }
}
