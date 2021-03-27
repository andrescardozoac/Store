import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligtht]'
})
export class HighligthtDirective {

  constructor(
    element: ElementRef
  ) { 

    element.nativeElement.style.backgroundColor = "red";
  }

}
