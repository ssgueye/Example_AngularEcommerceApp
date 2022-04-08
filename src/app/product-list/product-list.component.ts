import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  ngOnInit() {
    
    this.products = [
      new Product('Nike Air Max Shoes', 50, 10, new Date(), "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/47dbe1ff-2e14-4352-ab35-98e9faed37f0/chaussure-air-max-plus-pour-Z0v6W8.png"),
      new Product('Jean XL Zara', 15, 5, new Date(), "https://static.zara.net/photos///2022/V/0/1/p/6688/331/406/2/w/1920/6688331406_6_1_1.jpg?ts=1641923351162"),
      new Product('Iphone 11 Fnac', 700, 3, new Date(), "https://www.backmarket.fr/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/290036_5a2ddcac-5a87-4462-9e9f-30a304b5e215.jpg"),
      new Product('Puma Senegal kit', 90, 7, new Date(), "https://m.media-amazon.com/images/I/8110B2OD+2L._AC_UX679_.jpg"),
    ];
  }
}