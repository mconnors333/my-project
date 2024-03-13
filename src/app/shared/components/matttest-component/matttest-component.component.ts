import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matttest-component',
  standalone: true,
  templateUrl: './matttest-component.component.html',
  styleUrls: ['./matttest-component.component.css'],
})
export class MatttestComponentComponent implements OnInit {
  name: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.subscribe((params) => {
      this.name = params['name'];
    });
  }
}
