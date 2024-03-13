import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroFormTemplateComponent } from './template/hero-form-template/hero-form-template.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive/hero-form-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroFormTemplateComponent, HeroFormReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-form-validation';
}
