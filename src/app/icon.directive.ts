import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { throwError } from 'rxjs';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  spanElement: any;
  iElement: any;  

  ngOnInit() {
    this.spanElement = this.renderer2.createElement('span');
    this.iElement = this.renderer2.createElement('i');
    this.renderer2.setAttribute(this.iElement, 'class', 'fa fa-map-marker');
    this.renderer2.appendChild(this.spanElement, this.iElement);
    this.elementRef.nativeElement.appendChild(this.spanElement);
  }

}
