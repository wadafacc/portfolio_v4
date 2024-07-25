import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [],
  templateUrl: './draggable.component.html',
  styleUrl: './draggable.component.css'
})
export class DraggableComponent {
  x: number;
  y: number;
  px: number;
  py: number;
  drag: boolean;
  ref: ElementRef = Inject(ElementRef);
  constructor() {
    this.x = 20;
    this.y = 20;

    this.px = 0;
    this.py = 0;

    this.drag = false;
  }

  setDrag(e: MouseEvent) {
    this.drag = true;
    
    this.px = e.clientX;
    this.py = e.clientY;
  }

  move(e: MouseEvent) {
    if (!this.drag) {
      return;
    }

    this.x += e.clientX - this.px;
    this.y += e.clientY - this.py;
    this.px = e.clientX;
    this.py = e.clientY;
  }

  @HostListener('document:mouseup', ['$event'])
  onRelease(e: MouseEvent) {
    this.drag = false;
  }
}
