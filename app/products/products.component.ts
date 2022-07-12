import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.service";

@Component({
  moduleId: module.id,
  selector: "pm-products",
  templateUrl: "./products.component.html",
})
export class ProductComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Array<IProduct>;
  selectedProduct: string;
  filterKey: string = "";
  editableProduct: IProduct;
  printProduct(product: IProduct) {
    this.selectedProduct = product.productName;
  }
  deleteProduct(product: IProduct) {
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
  onKeyUp(key: string) {
    this.filterKey = key;
  }
  editProduct(product: IProduct) {
    this.editableProduct = product;
    console.log(this.editableProduct);
  }
  editProductsAfterSave(e: IProduct) {
    console.log(e);
  }
  ngOnInit() {
    this.productsService
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }
}
