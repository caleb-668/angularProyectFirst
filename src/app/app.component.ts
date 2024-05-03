import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Primera Chamba Angular Caleb Coronado';
  generateSpaceLayer(size: string, selector: string, totalStars: number, duration: string) {
    const COLOR: string[] = ["#fff", "#fff2", "#fff4", "#fffc"];
    const layer: string[] = [];
    for (let i = 0; i < totalStars; i++) {
      const color = COLOR[Math.floor(Math.random() * COLOR.length)];
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }
    const container = document.querySelector(selector) as HTMLElement;
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
  }

  ngOnInit() {
    this.generateSpaceLayer("2px", ".space-1", 200, "25s");
    this.generateSpaceLayer("4px", ".space-2", 100, "20s");
    this.generateSpaceLayer("6px", ".space-3", 25, "15s");
  }
}
