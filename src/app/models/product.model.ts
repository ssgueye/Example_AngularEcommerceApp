export class Product {
  constructor(
    public id: number,
    public name: String,
    public price: number,
    public stock: number,
    public createdAt: Date,
    public imageUrl: String
  ) {}
}
