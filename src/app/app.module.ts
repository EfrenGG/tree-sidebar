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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';

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
    ProductDetailComponent,
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
      { path: 'products/:id', component: ProductDetailComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
