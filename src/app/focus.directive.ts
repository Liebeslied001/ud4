import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  constructor( private redered2:Renderer2) { }

  ngOnInit(): void {
  }

}
