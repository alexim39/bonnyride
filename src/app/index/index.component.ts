import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoadingSpinnerService } from '../_common/services/loader/spinner.service';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'async-index',
  standalone: true,
  imports: [MatToolbarModule, NavbarComponent, FooterComponent, NavComponent, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule ],
  template: `
  <async-nav id="nav"></async-nav>
  
  <!-- <async-navbar></async-navbar> -->
    
  <div id="container">
    <router-outlet id="outlet"> </router-outlet>
  </div>

  <async-footer id="footer"></async-footer>
  `,
  styles: [`
  `]
})
export class IndexComponent implements OnInit { 
  constructor(
    public loadingSpinnerService: LoadingSpinnerService
  ) {}
  
  ngOnInit(): void {
    this.loadingSpinnerService.hide()
  }
}
