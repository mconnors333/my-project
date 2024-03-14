import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { MatttestComponentComponent } from './shared/components/matttest-component/matttest-component.component';
import { TitleComponentComponent } from './shared/components/title-component/title-component.component';
import { LinkComponent } from './shared/components/link/link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatttestComponentComponent,
    TitleComponentComponent,
    LinkComponent,
    CommonModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = "Welcome to Matt's App";
}
