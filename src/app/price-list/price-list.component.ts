import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


export interface PriceListInterface {
    position: number;
    pickUp: string;
    dropOff: string;
    price: number;
    promoPrice: number;
  }


  const PRICELIST_DATA: PriceListInterface[] = [
    {position: 1, pickUp: 'NLNG roundabout', dropOff: 'Bonny beach', price: 5000, promoPrice: 3000},
    {position: 2, pickUp: 'NLNG roundabout', dropOff: 'Shell gate', price: 4000, promoPrice: 2000},
    {position: 3, pickUp: 'NLNG roundabout', dropOff: 'Bonny roundabout', price: 4500, promoPrice: 2500},
    {position: 4, pickUp: 'NLNG roundabout', dropOff: 'Wilbros junction', price: 3000, promoPrice: 1500},
    {position: 5, pickUp: 'NLNG roundabout', dropOff: 'Finima field', price: 3000, promoPrice: 2000},
    {position: 6, pickUp: 'NLNG roundabout', dropOff: 'Workers village junction', price: 2000, promoPrice: 1500},
    {position: 7, pickUp: 'NLNG roundabout', dropOff: 'Akiama junction', price: 3000, promoPrice: 2000},
    {position: 8, pickUp: 'NLNG roundabout', dropOff: 'H-block', price: 2000, promoPrice: 1000},
    {position: 9, pickUp: 'NLNG roundabout', dropOff: 'Pack and ride', price: 2500, promoPrice: 1500},
    {position: 10, pickUp: 'Finima', dropOff: 'Bonny beach', price: 6000, promoPrice: 4000},
    {position: 11, pickUp: 'Finima', dropOff: 'Shell gate', price: 5000, promoPrice: 3000},
    {position: 12, pickUp: 'Finima', dropOff: 'Wilbros junction', price: 4000, promoPrice: 2000},
    {position: 13, pickUp: 'Finima', dropOff: 'Bonny roundabout', price: 4500, promoPrice: 3500},
    {position: 14, pickUp: 'Finima', dropOff: 'Workers village junction', price: 3000, promoPrice: 1800},
    {position: 15, pickUp: 'Finima', dropOff: 'Akiama  junction', price: 3200, promoPrice: 2000},
    {position: 16, pickUp: 'Finima', dropOff: 'H-block', price: 2500, promoPrice: 1500},
    {position: 17, pickUp: 'Finima', dropOff: 'Pack and ride', price: 2800, promoPrice: 1800},
    {position: 18, pickUp: 'Bonny beach', dropOff: 'Finima', price: 8000, promoPrice: 5000},
    {position: 19, pickUp: 'Bonny beach', dropOff: 'NLNG roundabout', price: 5000, promoPrice: 3000},
    {position: 20, pickUp: 'Bonny beach', dropOff: 'RA gate', price: 5000, promoPrice: 3000},
    {position: 21, pickUp: 'Bonny beach', dropOff: 'Pack and ride', price: 6000, promoPrice: 4500},
    {position: 22, pickUp: 'Bonny beach', dropOff: 'IA', price: 6000, promoPrice: 4500},
    {position: 23, pickUp: 'Bonny beach', dropOff: 'Workers village junction', price: 3500, promoPrice: 2500},
    {position: 24, pickUp: 'Bonny beach', dropOff: 'Abalamabie (last bus stop)', price: 6500, promoPrice: 4500},
    {position: 25, pickUp: 'Bonny beach', dropOff: 'Akiama junction', price: 5000, promoPrice: 3500},
    {position: 26, pickUp: 'Bonny beach', dropOff: 'Water well 1, 2, 3, 4, and 5', price: 5500, promoPrice: 3600},
    {position: 27, pickUp: 'Bonny beach', dropOff: 'Water well 6, 7, and 8', price: 6000, promoPrice: 4000},
    {position: 28, pickUp: 'Bonny beach', dropOff: 'Uguede', price: 5000, promoPrice: 4000},
    {position: 29, pickUp: 'Pack and ride', dropOff: 'Finima', price: 4000, promoPrice: 3000},
    {position: 30, pickUp: 'Pack and ride', dropOff: 'RA gate', price: 2500, promoPrice: 2000},
    {position: 31, pickUp: 'Pack and ride', dropOff: 'Wilbros junction', price: 4000, promoPrice: 2500},
    {position: 32, pickUp: 'Pack and ride', dropOff: 'Shell gate', price: 4500, promoPrice: 3000},
    {position: 33, pickUp: 'Pack and ride', dropOff: 'Akiama junction', price: 5000, promoPrice: 3800},
    {position: 33, pickUp: 'Pack and ride', dropOff: 'Akiama junction', price: 4000, promoPrice: 2800},
    {position: 34, pickUp: 'Pack and ride', dropOff: 'Bonny roundabout', price: 5000, promoPrice: 3800},
    {position: 35, pickUp: 'Pack and ride', dropOff: 'Bonny beach', price: 6000, promoPrice: 4000},
  ];


/**
 * @title Price List
 */
@Component({
  selector: 'async-price-list',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatTableModule, MatDividerModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  template: `
  <section class="head">

  <article>
      <h2>See our price listing</h2>
      <!-- <h3>{{course.subTitle}}</h3> -->
      <p>Refer to the price listing table below to view fares for several popular locations and landmarks within Bonny Island.</p>
    </article>

  </section>


  <section class="body">
    <article class="writeup">
      <h3>Price List</h3>

      <mat-form-field>
        <mat-label>Search to filter locations</mat-label>
            <input matInput (keyup)="applyFilter($event)" placeholder="Ex. wilbros" #input>
      </mat-form-field>


    <div class="mat-elevation-z8">
        <table mat-table [dataSource]="dataSource" matSort>

            <!--- Note that these columns can be defined in any order.
            The actual rendered columns are set as a property on the row definition" -->

            
            <ng-container matColumnDef="position">
                <th mat-header-cell *matHeaderCellDef> No. </th>
                <td mat-cell *matCellDef="let priceListData"> {{priceListData.position}} </td>
            </ng-container>

            
            <ng-container matColumnDef="pickUp">
                <th mat-header-cell *matHeaderCellDef> Pick up point </th>
                <td mat-cell *matCellDef="let priceListData"> {{priceListData.pickUp}} </td>
            </ng-container>

            
            <ng-container matColumnDef="dropOff">
                <th mat-header-cell *matHeaderCellDef> Drop off point </th>
                <td mat-cell *matCellDef="let priceListData"> {{priceListData.dropOff}} </td>
            </ng-container>

            
            <ng-container matColumnDef="price">
                <th mat-header-cell *matHeaderCellDef> Price </th>
                <td mat-cell *matCellDef="let priceListData" class="cross-out-price"> {{priceListData.price | currency:"NGN":"&#8358;"}} </td>
            </ng-container>

            
            <ng-container matColumnDef="promoPrice">
                <th mat-header-cell *matHeaderCellDef> Promo price </th>
                <td mat-cell *matCellDef="let priceListData"> {{priceListData.promoPrice | currency:"NGN":"&#8358;"}} </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

            <!-- Row shown when there is no matching data. -->
            <tr class="mat-row" *matNoDataRow>
                <td class="no-match" colspan="8">No data matched the search </td>
            </tr>
        </table>
        <mat-paginator [pageSizeOptions]="[15, 30, 60, 100]" aria-label="Select page of locations"></mat-paginator>
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
      width: 70%;
      padding: 2em 1em 2em 8em;
      h3 {
        color: #ffab40;
      }
      p {
        text-align: justify;
        /* font-family: 'Courier New', monospace; */
        font-size: 14px;
        line-height: 1.5em;
      }
      table {
        width: 100%;
        .cross-out-price {
            color: #aaa;
            text-decoration: line-through
        }
        .no-match {
            color: red;
            text-align: center;
            padding-top: 2em;
        }
     }
     mat-form-field {
        width: 100%;
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
    h3 {
        padding-left: 1em;
    }
    width: 100%;
    padding: 1em;
    .form {
      display: flex;
      flex-direction: column;
    }
   /*  table {
        width: 90%;
    }
    mat-form-field {
        width: 90%;
     } */
  }
}
}

/* iPads/tablet (portrait and landscape) */
/* @media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {
  .head {
    article {
      width: 100%;
    }
  }
} */
`]
})
export class PriceListComponent implements AfterViewInit {
    displayedColumns: string[] = ['position', 'pickUp', 'dropOff', 'price', 'promoPrice'];
    //dataSource = PRICELIST_DATA;
    dataSource: MatTableDataSource<PriceListInterface >;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor() {
    
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(PRICELIST_DATA);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    

}
