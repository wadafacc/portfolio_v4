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

  @HostListener('document:DOMContentLoaded')
  welcomelogs() {
    console.log(`
██╗  ██╗███████╗     ██╗██╗
██║  ██║██╔════╝     ██║██║
███████║█████╗       ██║██║
██╔══██║██╔══╝  ██   ██║╚═╝
██║  ██║███████╗╚█████╔╝██╗
╚═╝  ╚═╝╚══════╝ ╚════╝ ╚═╝
                                              
Welcome, Stranger!

Good job opening the console 😄
This tells me you're one of three types of people:
- a developer that is curious about how this page is made
- a recruiter coming from my cv (thanks for taking the time :-))                      
- a poor fellow who missclicked
  `);

    console.log(`
[DEVELOPER]
This page is running on angular and a ton of css. There are no shaders involved, it's based on this really cool technique: \n(https://codepen.io/ste-vg/pen/ByaQXvp)\n
TL;DR: Stack 3 tiny, blurry images ontop of each other, play with sepia, saturation & hue-rotate until it fits your taste - then rotate the images in opposite directions.`);

    console.log(`
[RECRUITER]
First of all, thank you for taking the time to look at my page, i really appreciate it! if you're interested in hiring me, consider one of the following:
https://github.com/wadafacc
https://linkedin.com/in/tschlumpf`);

    console.log(`
[POOR SOUL]  
Hey there! Thanks for stumbling over my corner of the internet - if you wish to close this, consider clicking the small 'x' in the top right corner. Have a nice day!`);
  }

  @HostListener('document:mousemove', ['$event'])
  updateCursor(event: MouseEvent) {
    const cursor = document.getElementById("cursor");
    cursor?.animate(
      [{
        "top": (event.clientY + window.scrollY) + "px",
        "left": (event.clientX + window.scrollX) + "px"
      }], { "duration": 500, "fill": "forwards" });
  }

  @HostListener('document:mouseover', ['$event'])
  updateCursorSprite(event: MouseEvent) {
    const hovered = document.elementFromPoint(event.clientX, event.clientY);

    if (hovered) {
      let cursor = document.getElementById("cursor");
      ["IMG", "A"].includes(hovered.tagName) ? cursor?.classList.add("hovering") : cursor?.classList.remove("hovering");
    }
  }
}