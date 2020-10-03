import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MenuItem } from './menu-item';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService implements Resolve<MenuItem> {
  private menuItemsUrl =
    'https://cloud-rest.grabasaweb.mx/store/menus/products';

  menusCollection: Array<MenuItem> = [];
  indexedMenuOptions: { [id: string]: MenuItem };

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<Array<MenuItem>> {
    return this.http.get<Array<MenuItem>>(this.menuItemsUrl).pipe(
      tap((data) => {
        this.menusCollection = data;
        this.indexedMenuOptions = Object.fromEntries(
          this.menusCollection.map((opt) => [opt.id, opt])
        );
      }),
      catchError(this.handleError)
    );
  }

  resolve(
    route: ActivatedRouteSnapshot
  ): MenuItem | Observable<MenuItem> | Promise<MenuItem> {
    const menuId = route.paramMap.get('id');
    if (this.menusCollection.length > 0) {
      return this.indexedMenuOptions[menuId];
    }
    return this.getMenuItems().pipe(map(() => this.indexedMenuOptions[menuId]));
  }

  getProducts(productsLink: string): Observable<any> {
    return this.http.get<any>(productsLink).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
