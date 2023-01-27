import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { throwError } from 'rxjs';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective {

  @Input('nameIcon')
  nameIcon!: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.renderer2.setAttribute(this.elementRef.nativeElement, "class", "fa fa-" + this.nameIcon);
  }

}
