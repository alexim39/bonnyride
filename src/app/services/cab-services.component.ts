import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

/**
 * @title contact page
 */
@Component({
  selector: 'async-cab-services',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  template: `
  <section class="head">

  <article>
      <h2>Cab Services</h2>
      <!-- <h3>{{course.subTitle}}</h3> -->
      <p>Use below forms to contat us and share your thoughts with us</p>
    </article>

  </section>


  <section class="body">
    <article class="writeup">
      <h3>Our Contact Details</h3>

      <div class="contact-wrapper">

        <div class="contact-details">
          <!-- <h1>Contact Us</h1> -->
          <p>Giv us a call, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>

        </div>

        

      </div>
      

    </article>
   </section>
  `,
  styles: [`
.head {
  background: #00838F;
  article {
    color: white;
    padding: 2em 1em 2em 8em;
    h2 {
      font-family: Garamond, serif;
      font-size: 2em;
    }
    h3 {
      font-family: Georgia, serif;
      font-size: 1em;
    }
    p {
      text-align: justify;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.5em;
    }
    a {
      color: white;
      text-decoration: underline;
      font-weight: bold;
    }
  }
}

.body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    .writeup {
      width: 100%;
      padding: 1em 10em;
      h3 {
        color: #ffab40;
      }
      p {
        text-align: justify;
        /* font-family: 'Courier New', monospace; */
        font-size: 14px;
        line-height: 1.5em;
        width: 80%;
      }
      .form{
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        mat-form-field {
          flex: 1;
         }
      }
      mat-form-field {
        width: 100%;
      }
      button {
        width: 15%;
      }
    }
}


.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.contact-details {
  flex: 1; /* Take 50% width initially */
  padding: 10px;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .address-wrapper {
    display: flex;
    align-items: center; /* Align items vertically center */
    .fa {
      font-size: 2em;
      color: #00838F;
    }
    .fa-icon {
      margin-right: 10px; /* Add spacing between the icon and text */
    }
    .address-text {
      h6 {
        font-size: 11px;
        margin-bottom: 5px;
      }

      p {
        font-size: 14px;
        a {
          text-decoration: none !important;
          color: black;
        }
      }
}
  }
}

.contact-form {
  flex: 1; /* Take 50% width initially */
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;

    mat-form-field {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 15px;
    }

    textarea {
      height: 150px; /* Adjust as needed */
    }
    .btn {
      display: flex;
      flex-direction: row;
      justify-content: flex-end; 
    }
  }
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.head {
    article {
      width: 100%;
      padding: 1em;
      h2 {
        font-size: 1.4em;
      }
      h3 {
        font-size: 1em;
      }
      p {
        width: 90%;
      }
    }
}

.body {
  
  .writeup {
    width: 100%;
    padding: 1em;
    h3 {
      padding-left: 1em;
    }
    p {
      width: 100%;
    }

    .contact-wrapper {
        flex-direction: column; /* Stack items vertically on smaller screens */
      }

      .contact-details,
      .contact-form {
        flex: 100%; /* Take 100% width on smaller screens */
      }
    }
   
  }
}



/* iPads/tablet (portrait and landscape) */
 @media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {
  .body {
    .writeup {
      width: 100%;
      padding: 1em 2em;
    }
  }
}
`]
})
export class CabServicesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}