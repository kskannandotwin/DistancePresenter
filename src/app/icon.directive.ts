import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.innerHTML = `
    Yes
    `;
    console.log('yes');
  }

}
