import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-component',
  standalone: true,
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.css'],
})
export class TitleComponentComponent {
  @Input() title: string = '';
}
