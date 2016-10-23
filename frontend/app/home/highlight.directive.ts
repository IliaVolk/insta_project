import {Directive, Renderer, ElementRef} from "@angular/core"

@Directive({
  selector: "[highlight]"
})
export class HighlightDirective{
  constructor(renderer:Renderer, elementRef:ElementRef){
    renderer.setElementStyle(elementRef.nativeElement, "background-color", "gold")
    renderer.setElementStyle(elementRef.nativeElement, "color", "green")
  }
}
