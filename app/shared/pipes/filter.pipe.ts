import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure:false
})
export class FilterPipe implements PipeTransform {
  transform(products: any, key: string) {
    console.log(products)
    return products.filter((p: any) => p.productName.toLowerCase().includes(key.toLowerCase()));
  }
}
