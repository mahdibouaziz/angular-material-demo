import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input() drawer;
  @Input() mobile;

  constructor() {}

  ngOnInit(): void {}

  toggleDrawer(): void {
    if (this.mobile) {
      this.drawer.toggle();
    }
  }
}
