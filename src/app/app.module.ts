import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TreeChildComponent } from './tree/tree-child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SvgComponent } from './navbar/svgs/arrow.component';
import { SvgBellComponent } from './navbar/svgs/bell.component';
import { SvgConfigComponent } from './navbar/svgs/configuration.component';

import { SvgMailComponent } from './navbar/svgs/mail.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import { MenuItemsService } from './menu-items.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TreeChildComponent,
    NavbarComponent,
    SvgComponent,
    SvgBellComponent,
    SvgConfigComponent,
    SvgMailComponent,
    ProductsComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products/:id',
        component: ProductListComponent,
        resolve: {
          menuOption: MenuItemsService,
        },
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
