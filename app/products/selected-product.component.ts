import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "pm-selected-product",
  templateUrl: "./selected-product.component.html",
})
export class SelectedProductComponent {
  @Input() editProduct: IProduct;
  @Output() savedProduct = new EventEmitter<IProduct>();

  onSaveProduct(prdtName: string) {
    this.editProduct.productName = prdtName;
    this.savedProduct.emit(this.editProduct);
  }
}
