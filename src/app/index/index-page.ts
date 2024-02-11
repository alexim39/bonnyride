import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BannerComponent } from './banner/banner.component';
import { WhyWeExistComponent } from './why-we-exist/why-we-exist.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LoadingSpinnerService } from '../_common/services/loader/spinner.service';
import { FooterComponent } from '../footer/footer.component';
import { BeOurPartnerComp } from './be-our-partner/be-our-partner.component';

@Component({
  selector: 'async-index-page',
  standalone: true,
  imports: [MatToolbarModule, FooterComponent, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, BannerComponent, WhyWeExistComponent, TestimonialsComponent, BeOurPartnerComp],
  template: `

    <async-index-banner></async-index-banner>
    <async-index-why-we-exist></async-index-why-we-exist>
    <async-be-our-partner></async-be-our-partner>
    <async-index-testimonials></async-index-testimonials>
  `,
  styles: [`
  `]
})
export class IndexPageComponent implements OnInit { 
  constructor(
    public loadingSpinnerService: LoadingSpinnerService
  ) {}
  
  ngOnInit(): void {
    this.loadingSpinnerService.hide()
  }
}
