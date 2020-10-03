import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MenuItem } from '../menu-item';
import { MenuItemsService } from '../menu-items.service';
import { Link, Product } from '../models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private routeDataSub: Subscription;
  private productDataSub: Subscription;

  title: string;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuItemsService
  ) {}

  state$: Observable<object>;

  ngOnInit() {
    this.routeDataSub = this.route.data.subscribe(
      (data: { menuOption: MenuItem }) => {
        this.products = [];
        const { menuOption } = data;
        if (!menuOption) {
          return;
        }
        this.title = menuOption.name;
        const { href } = menuOption.links.find(
          (link) => link.rel === 'products'
        );
        this.productDataSub = this.menuService
          .getProducts(href)
          .subscribe(
            (data: { links: Link[]; content: Product[] }) =>
              (this.products = data.content.slice(1, 10))
          );
      }
    );
  }

  ngOnDestroy(): void {
    if (this.routeDataSub) {
      this.routeDataSub.unsubscribe();
    }
    if (this.productDataSub) {
      this.productDataSub.unsubscribe();
    }
  }
}
