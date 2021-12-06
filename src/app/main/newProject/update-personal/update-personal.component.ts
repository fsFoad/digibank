import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-personal',
  templateUrl: './update-personal.component.html',
  styleUrls: ['./update-personal.component.scss']
})
export class UpdatePersonalComponent implements OnInit {
  activeTab = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextTab(): void {
    this.activeTab = Math.min(6, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }
}
