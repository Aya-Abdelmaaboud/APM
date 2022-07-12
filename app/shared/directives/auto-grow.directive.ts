import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
  selector: "[autoGrow]",
  host: {
    "(focus)": "onFocus()",
    "(blur)": "onBlur()",
  },
})
export class AutoGrowDirective {
  constructor(private elemnet: ElementRef, private renderer: Renderer) {}
  onFocus() {
    this.renderer.setElementStyle(this.elemnet.nativeElement, "width", "400px");
  }
  onBlur() {
    this.renderer.setElementStyle(this.elemnet.nativeElement, "width", "200px");
  }
}
