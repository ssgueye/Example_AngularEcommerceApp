import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProduitService) {}

  ngOnInit() {
    this.products = this.productService.getAllproducts();
  }
}
