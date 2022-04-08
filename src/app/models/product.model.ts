export class Product {
  constructor(
    public name: String,
    public price: number,
    public stock: number,
    public createdAt: Date,
    public imageUrl: String
  ) {}
}
