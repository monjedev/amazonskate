import { Component } from '@angular/core';
import { NavBar } from "../../components/organisms/nav-bar/nav-bar";
import { FooterComponent } from "../../components/organisms/footer-component/footer-component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  imports: [NavBar, FooterComponent, RouterOutlet],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss',
})
export class LayoutComponent {}
