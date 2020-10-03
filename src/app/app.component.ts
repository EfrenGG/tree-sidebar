import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showSidebar: boolean;

  constructor() {}

  ngOnInit() {
    this.showSidebar = true;
  }

  handleSidebar(show: boolean): void {
    this.showSidebar = show;
  }

  hideSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
}
