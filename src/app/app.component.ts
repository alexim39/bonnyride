import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'async-root',
  standalone: true,
  imports: [ RouterModule],
  template: `
    <div id="container">
      <router-outlet id="outlet"> </router-outlet>
    </div>
  `,
  styles: [`
  #container {
    animation: fadeInAnimation ease 3s;
  }

  @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #container {
    display:flex;
    flex-direction: column;
  }
}

  `]
})
export class AppComponent {}
