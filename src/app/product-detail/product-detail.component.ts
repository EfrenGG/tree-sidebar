import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private routeDataSub: Subscription;
  productsLink: string;
  products: Array<any>;
  title: string;

  constructor(private route: ActivatedRoute) {}

  state$: Observable<object>;

  ngOnInit() {
    this.routeDataSub = this.route.data.subscribe(
      (data: { menuOption: MenuItem }) => {
        const { menuOption } = data;
        console.log(menuOption);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.routeDataSub) {
      this.routeDataSub.unsubscribe();
    }
  }
}
