import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../core.module';
import { Product } from '../../../model';

@Injectable({
  providedIn: CoreModule
})
export class ProductsService {

  constructor(private readonly http: HttpClient) { }
 
 loadProducts(categoryName: string): Promise<Product[]> {
 return this.http
 .get(`http://localhost:4200/api/products/searchcategory/${categoryName}`)
 .toPromise()
 .then(result => result as Product[]);
 }
}
