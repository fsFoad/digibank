import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizational-entity-manager',
  templateUrl: './organizational-entity-manager.component.html',
  styleUrls: ['./organizational-entity-manager.component.scss']
})
export class OrganizationalEntityManagerComponent implements OnInit {
  activeTab = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextTab(): void {
    this.activeTab = Math.min(5, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }
}
