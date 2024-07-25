import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DraggableComponent } from "./components/draggable/draggable.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ShelfComponent } from "./components/shelf/shelf.component";
import { animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DraggableComponent, LandingComponent, ShelfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio_v4';


  @HostListener('document:mousemove', ['$event'])
  updateCursor(event: MouseEvent) {
    const cursor = document.getElementById("cursor");
    cursor?.animate(
      [{
        "top": (event.clientY + window.scrollY) + "px",
        "left": (event.clientX + window.scrollX) + "px"
      }], {"duration": 500, "fill":"forwards"});
  }

  @HostListener('document:mouseover', ['$event'])
  updateCursorSprite(event: MouseEvent) {
    const hovered = document.elementFromPoint(event.clientX, event.clientY);

    if (hovered) {
      let cursor = document.getElementById("cursor");
      ["IMG","A"].includes(hovered.tagName) ? cursor?.classList.add("hovering") : cursor?.classList.remove("hovering");
    }
  }
}
