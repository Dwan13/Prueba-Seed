import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open=false
  constructor() { }

  ngOnInit(): void {
  }
  openMenu(){
    this.open=!this.open;
  }
}
