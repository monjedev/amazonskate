import { Component, signal } from '@angular/core';
import { Button } from "../../atoms/button/button";

@Component({
  selector: 'app-landing-page',
  imports: [Button],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  stats = signal([
    { value: '150+', label: 'Clubes Activos', icon: '🌿' },
    { value: '5,000+', label: 'Atletas Registrados', icon: '⛸️' },
    { value: '300+', label: 'Competencias', icon: '🏆' },
    { value: '12', label: 'Países', icon: '🗺️' },
  ]);
  testimonials = signal([
    {
      quote: 'Esta plataforma ha transformado la forma en que gestionamos nuestros clubes de patinaje. ¡Es increíble!',
      name: 'Carlos Martínez',
      role: 'Entrenador de Patinaje'
    }
  ]);
}
