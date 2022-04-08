import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() product!: Product;

  pay!: String;
  nbProductAdded! : number;
  text!: String;
  totalPay!: number;
  
  ngOnInit() {
    this.pay = "Pay";
    this.totalPay = 0;
    this.nbProductAdded = 0;
    this.text = "Product(s) added to the cart";
  }

  OnclickPay() {
    if(this.product.stock > 0)
    {
      
      this.product.stock--;
      this.nbProductAdded++;
      this.totalPay += this.product.price; 
    }
    else{
      window.alert("Le produit "+this.product.name+" est épuisé");
    }
  }

}