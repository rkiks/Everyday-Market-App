import { Component, Input } from '@angular/core';
import { IProduct } from '../../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 
  @Input() product: IProduct | undefined

}
